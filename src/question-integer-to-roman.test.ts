/* eslint-env jest/globals */
import { integerToRoman } from './question-integer-to-roman';

test('reverseStringInPlace', () => {
  expect(integerToRoman(5)).toBe("V");
  expect(integerToRoman(14)).toBe("XIV");
  expect(integerToRoman(3549)).toBe("MMMDXLIX");
});
