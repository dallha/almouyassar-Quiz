import assert from 'node:assert/strict';
import test from 'node:test';

import { pickSmartQuestions } from '../src/store';
import { ENRICHED_QUESTIONS } from '../src/data/questions_enriched';
import { getLocalizedQuestion, Question } from '../src/types';
import { ADVENTURE_ZONES } from '../src/adventureData';
import { QUESTIONS } from '../src/data';

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

test('ADVENTURE_ZONES contains 10 epic zones with progressive nodes and boss duels', () => {
  assert.equal(ADVENTURE_ZONES.length, 10, 'Expected exactly 10 adventure zones');

  ADVENTURE_ZONES.forEach((zone, idx) => {
    assert.equal(zone.order, idx + 1, `Zone ${zone.id} must have order ${idx + 1}`);
    assert.ok(zone.title && zone.title.length > 0, `Zone ${zone.id} must have a title`);
    assert.ok(zone.description && zone.description.length > 0, `Zone ${zone.id} must have a description`);
    assert.ok(zone.nodes.length >= 3, `Zone ${zone.id} must have at least 3 nodes`);

    const hasBoss = zone.nodes.some((n) => n.type === 'boss');
    assert.ok(hasBoss, `Zone ${zone.id} must include a boss node`);
  });
});

test('Adventure question scaling: picks 5 questions for standard nodes and 7 for boss challenges', () => {
  const pool = QUESTIONS.filter((q) => q.categorie === 'Coran');
  assert.ok(pool.length >= 20, 'Pool must have enough questions');

  // Standard node (5 questions)
  const standard = pickSmartQuestions(pool, 5, {});
  assert.equal(standard.selected.length, 5);
  assert.equal(new Set(standard.selected.map((q) => q.id)).size, 5);

  // Boss node (7 questions)
  const boss = pickSmartQuestions(pool, 7, {});
  assert.equal(boss.selected.length, 7);
  assert.equal(new Set(boss.selected.map((q) => q.id)).size, 7);
});

test('Enriched questions discovery preset filters all 166 questions correctly', () => {
  const enriched = QUESTIONS.filter((q) => Number(q.id) >= 6000);
  assert.equal(enriched.length, 166, 'Expected exactly 166 enriched questions with id >= 6000');
  
  // Selection of 15 questions for quick discovery preset
  const quickPick = pickSmartQuestions(enriched, 15, {});
  assert.equal(quickPick.selected.length, 15);
  assert.equal(new Set(quickPick.selected.map((q) => q.id)).size, 15);
  for (const q of quickPick.selected) {
    assert.ok(Number(q.id) >= 6000, `Expected enriched question ID, got ${q.id}`);
  }
});
