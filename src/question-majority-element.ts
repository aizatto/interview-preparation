/**
 * Given an array of size n, find the majority element. The majority element is
 * the element that appears more than floor(n/2) times.
 *
 * You may assume that the array is non-empty and the majority element always
 * exist in the array.
 *
 * https://www.interviewbit.com/problems/majority-element/
 */

// param A : array of integers
// return an integer
export function  majorityElement(A) {
  A.sort();
  const majorityElementCount = A.length / 2;
  let count = 0;
  let currentElement = A[0];
  for (let i = 0; i < A.length; i++) {
    const value = A[i];
    if (value === currentElement) {
      count += 1;
      if (count >= majorityElementCount) {
        return value;
      }
    } else {
      currentElement = value;
      count = 1;
    }
  }
  return currentElement;
};
