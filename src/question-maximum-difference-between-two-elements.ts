/**
 * https://www.geeksforgeeks.org/maximum-difference-between-two-elements/
 * https://www.youtube.com/watch?v=SO0bwMziLlU
 */

export function maximumDifference(array: number[]): number {
  if (array.length <= 1) {
    return -1;
  }

  let maxDiff = -1;

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[i]) {
        continue;
      }

      const diff = array[j] - array[i];
      if (diff > maxDiff) {
        maxDiff = diff;
      }
    }
  }

  return maxDiff;
}