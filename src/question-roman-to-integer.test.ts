/* eslint-env jest/globals */
import { romanToInteger } from './question-roman-to-integer';

test('romanToInteger', () => {
  expect(romanToInteger("V")).toBe(5);
  expect(romanToInteger("XIV")).toBe(14);
  expect(romanToInteger("XX")).toBe(20);
  expect(romanToInteger("MDCVI")).toBe(1606);
  expect(romanToInteger("MMMDXLIX")).toBe(3549);
});
