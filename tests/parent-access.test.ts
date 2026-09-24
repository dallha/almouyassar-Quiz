import assert from 'node:assert/strict';
import test from 'node:test';

import { canAccessChildData, getAuthorizedChildIds } from '../src/features/parent/parentAccessService';

test('parent can access only explicitly linked child data', () => {
  const links = [
    { parent_id: 'parent-a', child_id: 'child-a' },
    { parent_id: 'parent-b', child_id: 'child-b' },
  ];

  assert.equal(canAccessChildData('parent-a', 'child-a', links), true);
  assert.equal(canAccessChildData('parent-a', 'child-b', links), false);
  assert.equal(canAccessChildData('parent-b', 'child-a', links), false);
});

test('authorized child ids are filtered to the parent scope', () => {
  const links = [
    { parent_id: 'parent-a', child_id: 'child-a' },
    { parent_id: 'parent-a', child_id: 'child-b' },
    { parent_id: 'parent-c', child_id: 'child-c' },
  ];

  assert.deepEqual(getAuthorizedChildIds('parent-a', links), ['child-a', 'child-b']);
  assert.deepEqual(getAuthorizedChildIds('parent-c', links), ['child-c']);
});
