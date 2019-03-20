/**
 * Given an array of integers, return the highest product possible by multiplying
 * 3 numbers from the array
 * 
 * https://www.interviewbit.com/problems/highest-product/
 * https://www.geeksforgeeks.org/find-maximum-product-of-a-triplet-in-array/
 */

/*
 * Have to be careful of negative numbers:
 * 1 negative number = negative
 * 2 negative numbers = positive
 * 3 negative numbers = negative
 *
 * Option 1:
 * - Find power set of 3, and multiply all the numbers
 */
export function maxp3(A) {
  const {length} = A;

  let highestProduct = null;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      for (let k = 0; k < length; k++) {
        if (i === j || i === k || j === k) {
          continue;
        }

        const value = A[i] * A[j] * A[k];
        if (highestProduct === null) {
          highestProduct = value;
        }

        if (value > highestProduct) {
          highestProduct = value;
        }
      }
    }
  }

  return highestProduct;
}
