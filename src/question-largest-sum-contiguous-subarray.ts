/*
 * Also known as:
 * - Maximum Subarray Problem
 *
 * Properties:
 * - "Contiguous subarray"
 *   - Continuous unbroken elements in array
 *   - Continuous index in array
 *   - Example: [1, 2, 3, 4, 5]
 *     - Correct: [1], [2, 3, 4]
 *     - Incorrect: [1, 3]
 *
 * Trick:
 * - Kadane's algorithm
 *
 * https://en.wikipedia.org/wiki/Maximum_subarray_problem
 * https://leetcode.com/problems/maximum-subarray/
 * https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
 * https://www.geeksforgeeks.org/maximum-subarray-sum-using-divide-and-conquer-algorithm/
 * https://www.interviewbit.com/problems/max-sum-contiguous-subarray/
 */

export function kadanesAlgorithm(
  array: number[],
): {value: number, startIndex: number | undefined, endIndex: number | undefined} {
  if (array.length === 0) {
    return {
      value: 0,
      startIndex: undefined,
      endIndex: undefined,
    };
  } if (array.length === 1) {
    return {
      value: array[0],
      startIndex: 0,
      endIndex: 0,
    };
  }

  let maxEndingHere = array[0];
  let maxSoFar = maxEndingHere;
  let startIndex = 0;
  let endIndex = 0;
  let tmpMaxEndingHere = 0;

  for (let i = 1; i < array.length; i++) {
    const value = array[i];
    const maxEndingHerePlusValue = maxEndingHere + value;

    if (value < maxEndingHerePlusValue) {
      tmpMaxEndingHere = maxEndingHerePlusValue;
    } else { 
      tmpMaxEndingHere = value;
      startIndex = i;
    }
    maxEndingHere = tmpMaxEndingHere;

    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
      endIndex = i;
    }
//    console.log({i, value, maxEndingHere, maxSoFar, tmpMaxEndingHere});
  }

  return {
    value: maxSoFar,
    startIndex,
    endIndex,
  }
}

function largestSumContiguousSubarrayRecursionCrossingSum(
  array: number[],
  low: number,
  mid: number,
  high: number,
): number {
  let sum = 0;
  let leftSum = Number.MIN_VALUE;
  let rightSum = Number.MIN_VALUE;

  for (let i = mid; i > low; i--) {
    sum += array[i];
    if (sum > leftSum) {
      leftSum = sum;
    }
  }

  sum = 0;
  for (let i = mid + 1; i <= high; i++) {
    sum += array[i];
    if (sum > rightSum) {
      rightSum = sum;
    }
  }

  return leftSum + rightSum;
}

function largestSumContiguousSubarrayRecursion(
  array: number[],
  low: number,
  high: number,
): number {
  if (low === high) {
    return array[low];
  }

  const mid = Math.floor((low + high) / 2);

  return Math.max(
    largestSumContiguousSubarrayRecursion(array, low, mid),
    largestSumContiguousSubarrayRecursion(array, mid + 1, high),
    largestSumContiguousSubarrayRecursionCrossingSum(array, low, mid, high),
  );
};

export function largestSumContiguousSubarray(
  array: number[],
): number {
  return largestSumContiguousSubarrayRecursion(
    array,
    0,
    array.length - 1,
  );
}
