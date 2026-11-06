import assert from 'assert';

// Test utilities
export function assertEqual(actual, expected, message) {
  assert.strictEqual(actual, expected, message);
}

export function assertTrue(value, message) {
  assert.strictEqual(value, true, message);
}

export function assertFalse(value, message) {
  assert.strictEqual(value, false, message);
}

export function assertThrows(fn, message) {
  assert.throws(fn, message);
}

export function test(name, fn) {
  console.log(`Testing: ${name}`);
  try {
    fn();
    console.log(`  ✓ ${name}`);
  } catch (error) {
    console.error(`  ✗ ${name}`);
    throw error;
  }
}
