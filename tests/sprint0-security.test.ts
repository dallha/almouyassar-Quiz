import assert from 'node:assert/strict';
import test from 'node:test';

import { calculateAdventureNodeRewards } from '../src/components/AdventureMode';
import { canPerformCmsTransition } from '../server/neonAuthRoles';
import { validateAndCalculateProgressBatch } from '../server/neonXpSecurity';
import { hashPinPBKDF2, verifyPinPBKDF2 } from '../src/services/parentSecurityService';

test('AdventureMode: strict idempotence on stars and bounded training XP on replay', () => {
  // First completion
  const firstRegular = calculateAdventureNodeRewards(false, 'quiz', 30);
  assert.equal(firstRegular.starsDelta, 1);
  assert.equal(firstRegular.effectiveXp, 30);

  const firstBoss = calculateAdventureNodeRewards(false, 'boss', 100);
  assert.equal(firstBoss.starsDelta, 3);
  assert.equal(firstBoss.effectiveXp, 100);

  // Replay (already completed)
  const replayRegular = calculateAdventureNodeRewards(true, 'quiz', 30);
  assert.equal(replayRegular.starsDelta, 0, 'No extra stars on replay');
  assert.equal(replayRegular.effectiveXp, 3, '10% training XP awarded on replay');

  const replayBoss = calculateAdventureNodeRewards(true, 'boss', 1000);
  assert.equal(replayBoss.starsDelta, 0, 'No extra stars on replay');
  assert.equal(replayBoss.effectiveXp, 50, 'Training XP capped at 50 max');
});

test('ParentSecurity: PBKDF2 hashing and verification with random salt', async () => {
  const pin = '4829';
  const { hashHex, saltHex } = await hashPinPBKDF2(pin);

  assert.ok(hashHex && hashHex.length === 64, 'SHA-256 PBKDF2 produces 64-char hex string');
  assert.ok(saltHex && saltHex.length === 32, 'Salt produces 32-char hex string');

  const isValid = await verifyPinPBKDF2(pin, hashHex, saltHex);
  assert.equal(isValid, true, 'Verification succeeds for correct PIN');

  const isInvalid = await verifyPinPBKDF2('0000', hashHex, saltHex);
  assert.equal(isInvalid, false, 'Verification fails for wrong PIN');
});

test('CMS RBAC: enforces 4-eyes rule and role separation between Author, Validator, and Admin', () => {
  const authorId = 'author-uuid-1';
  const reviewerId = 'validator-uuid-2';
  const adminId = 'admin-uuid-3';

  // 1. Author can submit own draft to review
  const authorSubmit = canPerformCmsTransition('author', authorId, authorId, 'DRAFT', 'REVIEW');
  assert.equal(authorSubmit.allowed, true);

  // 2. Author CANNOT validate their own content (Strict 4-eyes rule)
  const selfValidation = canPerformCmsTransition('author', authorId, authorId, 'REVIEW', 'VALIDATED');
  assert.equal(selfValidation.allowed, false, 'Author must not self-validate');

  // Even if an admin is the author of a draft, they cannot self-validate (must have a separate validator)
  const adminSelfValidation = canPerformCmsTransition('admin', authorId, authorId, 'REVIEW', 'VALIDATED');
  assert.equal(adminSelfValidation.allowed, false, 'Admin author cannot self-validate');

  // 3. Independent Validator CAN validate review
  const independentValidation = canPerformCmsTransition('validator', reviewerId, authorId, 'REVIEW', 'VALIDATED');
  assert.equal(independentValidation.allowed, true);

  // 4. Validator CANNOT publish to production (Admin only)
  const validatorPublish = canPerformCmsTransition('validator', reviewerId, authorId, 'VALIDATED', 'PUBLISHED');
  assert.equal(validatorPublish.allowed, false, 'Validator cannot publish');

  // 5. Admin CAN publish validated content
  const adminPublish = canPerformCmsTransition('admin', adminId, authorId, 'VALIDATED', 'PUBLISHED');
  assert.equal(adminPublish.allowed, true, 'Admin can publish independently validated content');
});

test('NeonXpSecurity: server authoritative calculation neutralizes client falsification', () => {
  const currentDbXp = 100;
  const fraudulentClientXp = 999999; // Fraudulent claim from browser

  const events = [
    {
      id: 'ev-1',
      questionId: 'extra-hadith-deb-001',
      category: 'Hadith',
      result: 'correct' as const,
      responseTimeMs: 6000,
      difficulty: 2,
      attempts: 1,
    },
    {
      id: 'ev-2',
      questionId: 'extra-fiqh-deb-005',
      category: 'Fiqh',
      result: 'incorrect' as const,
      responseTimeMs: 12000,
      difficulty: 1,
      attempts: 1,
    },
  ];

  const batch = validateAndCalculateProgressBatch(fraudulentClientXp, currentDbXp, events);

  assert.equal(batch.isSuspicious, true, 'Server detects fraudulent delta');
  assert.ok(batch.legitimateDeltaXp > 0 && batch.legitimateDeltaXp < 50, 'Server awards only legitimate event XP');
  assert.equal(batch.validEvents.length, 2);
});
