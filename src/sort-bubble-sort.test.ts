/* eslint-env jest/globals */
import { BubbleSort } from './sort-bubble-sort';

const BEST_CASE = [1, 2, 3, 4, 5];
const WORST_CASE = [5, 4, 3, 2, 1];
const AVERAGE_CASE = [5, 1, 3, 2, 4];
const SORTED = BEST_CASE;

test('Bubble Sort: Best Case', () => {
  const actual = BubbleSort(BEST_CASE);
  expect(actual).toEqual(SORTED);
});

test('Bubble Sort: Worst Case', () => {
  const actual = BubbleSort(WORST_CASE);
  expect(actual).toEqual(SORTED);
});

test('Bubble Sort: Average Case', () => {
  const actual = BubbleSort(AVERAGE_CASE);
  expect(actual).toEqual(SORTED);
});
