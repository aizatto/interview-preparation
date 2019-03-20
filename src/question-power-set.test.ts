/* eslint-env jest/globals */
import { powerSet } from './question-power-set';

test('powerSet', () => {
  expect(powerSet(['a', 'b'])).toEqual([
    [],
    ['a'],
    ['b'],
    ['a', 'b'],
  ]);

  expect(powerSet(['a', 'b', 'c'])).toEqual([
    [],
    ['a'],
    ['b'],
    ['a', 'b'],
    ['c'],
    ['a', 'c'],
    ['b', 'c'],
    ['a', 'b', 'c'],
  ]);
});
