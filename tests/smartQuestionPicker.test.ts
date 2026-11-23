import assert from 'node:assert/strict';
import test from 'node:test';

import { pickSmartQuestions } from '../src/store';
import { ENRICHED_QUESTIONS } from '../src/data/questions_enriched';
import { getLocalizedQuestion, Question } from '../src/types';

function makeMockPool(size: number): Question[] {
  return Array.from({ length: size }, (_, i) => ({
    id: i + 1,
    categorie: 'Coran',
    niveau: 'Débutant',
    question: `Question ${i + 1}`,
    options: ['A', 'B', 'C', 'D'],
    reponse_correcte: 'A',
    explication: `Explication ${i + 1}`,
    hint: `Indice ${i + 1}`,
  }));
}

test('pickSmartQuestions guarantees zero repetition until entire pool is exhausted', () => {
  const pool = makeMockPool(50);
  let seen: Record<string, number> = {};
  const allPickedIds: (string | number)[] = [];

  for (let sessionIdx = 0; sessionIdx < 5; sessionIdx++) {
    const { selected, updatedSeenTimestamps } = pickSmartQuestions(
      pool,
      10,
      seen,
      new Set(),
      1_000_000 + sessionIdx * 1000
    );
    assert.equal(selected.length, 10);
    seen = updatedSeenTimestamps;
    allPickedIds.push(...selected.map((q) => q.id));
  }

  assert.equal(new Set(allPickedIds).size, 50, 'Expected all 50 questions to appear once before any repeat');

  // 6th session wraps cleanly via LRU (oldest seen questions first) without duplicates inside the session
  const sixth = pickSmartQuestions(pool, 10, seen, new Set(), 2_000_000);
  assert.equal(sixth.selected.length, 10);
  assert.equal(new Set(sixth.selected.map((q) => q.id)).size, 10);
  for (const q of sixth.selected) {
    assert.ok(seen[String(q.id)] < 1_002_000, `Expected LRU question from early sessions, got ts=${seen[String(q.id)]}`);
  }
});

test('ENRICHED_QUESTIONS catalog is strictly valid in FR and AR with hints', () => {
  assert.ok(ENRICHED_QUESTIONS.length >= 150, `Expected at least 150 enriched questions, got ${ENRICHED_QUESTIONS.length}`);

  for (const q of ENRICHED_QUESTIONS) {
    assert.equal(q.options.length, 4, `Question ${q.id} must have 4 options`);
    assert.equal(new Set(q.options).size, 4, `Question ${q.id} options must be unique`);
    assert.ok(q.options.includes(q.reponse_correcte), `Question ${q.id} answer must be in options`);
    assert.ok(q.hint && q.hint.trim().length > 0, `Question ${q.id} must have a French hint`);

    const ar = q.translations?.ar;
    assert.ok(ar, `Question ${q.id} must have Arabic translation`);
    assert.equal(ar.options.length, 4, `Question ${q.id} AR must have 4 options`);
    assert.equal(new Set(ar.options).size, 4, `Question ${q.id} AR options must be unique`);
    assert.ok(ar.options.includes(ar.reponse_correcte), `Question ${q.id} AR answer must be in options`);
    assert.ok(ar.hint && ar.hint.trim().length > 0, `Question ${q.id} must have an Arabic hint`);
  }
});

test('getLocalizedQuestion returns localized hint for ar and fr', () => {
  const sample = ENRICHED_QUESTIONS[0];
  const frQ = getLocalizedQuestion(sample, 'fr');
  const arQ = getLocalizedQuestion(sample, 'ar');

  assert.equal(frQ.hint, sample.hint);
  assert.equal(arQ.hint, sample.translations?.ar?.hint);
});
