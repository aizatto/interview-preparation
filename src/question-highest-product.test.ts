/* eslint-env jest/globals */
import { maxp3 } from './question-highest-product';

test('maxp3', () => {
  expect(maxp3([0, -1, 3, 100, 70, 50])).toBe(350000);
});

