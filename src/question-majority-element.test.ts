/* eslint-env jest/globals */
import { majorityElement } from './question-majority-element';

test('MajorityElement', () => {
  expect(majorityElement([1, 2, 2])).toBe(2);
  expect(majorityElement([1, 1, 2])).toBe(1);
});
