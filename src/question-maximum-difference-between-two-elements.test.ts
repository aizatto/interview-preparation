/* eslint-env jest/globals */
import { maximumDifference } from "./question-maximum-difference-between-two-elements"

test('maximumDifference', () => {
  expect(maximumDifference([2, 3, 10, 6, 4, 8, 1])).toBe(8);
  expect(maximumDifference([7, 9, 5, 6, 3, 2])).toBe(2);
  expect(maximumDifference([1, 2, 90, 10, 110])).toBe(109);
  expect(maximumDifference([80, 2, 6, 3, 100])).toBe(98);
});
