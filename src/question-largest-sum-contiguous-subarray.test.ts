/* eslint-env jest/globals */
import { kadanesAlgorithm, largestSumContiguousSubarray } from './question-largest-sum-contiguous-subarray';

test('kadanesAlgorithm', () => {
  expect(kadanesAlgorithm(
    [-2, -3, 4, -1, -2, 1, 5, -3],
  )).toEqual({
    value: 7,
    startIndex: 2,
    endIndex: 6,
  });

  expect(kadanesAlgorithm(
    [1, -3, 2, 1, -1]
  )).toEqual({
    value: 3,
    startIndex: 2,
    endIndex: 3,
  });
});

test('largestSumContiguousSubarray', () => {
  expect(largestSumContiguousSubarray(
    [-2, -3, 4, -1, -2, 1, 5, -3],
  )).toEqual(7);

  expect(largestSumContiguousSubarray(
    [1, -3, 2, 1, -1]
  )).toEqual(3);
});

