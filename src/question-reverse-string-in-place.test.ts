/* eslint-env jest/globals */
import { reverseStringInPlace } from './question-reverse-string-in-place';

test('reverseStringInPlace', () => {
  expect(reverseStringInPlace("aizat")).toBe("tazia");
  // A man, a plan, a canal, panama
  expect(reverseStringInPlace("amanaplanacanalpanama")).toBe("amanaplanacanalpanama");
});
