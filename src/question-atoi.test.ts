/* eslint-env jest/globals */
import { atoi } from './question-atoi';

test('atoi', () => {
  expect(atoi("0")).toBe(0);
  expect(atoi("-12345")).toBe(-12345);
  expect(atoi("12345")).toBe(12345);
});
