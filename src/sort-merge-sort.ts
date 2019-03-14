/**
 * In computer science, merge sort (also commonly spelled mergesort) is an
 * efficient, general-purpose, comparison-based sorting algorithm. Most
 * implementations produce a stable sort, which means that the implementation
 * preserves the input order of equal elements in the sorted output. Mergesort
 * is a divide and conquer algorithm that was invented by John von Neumann in 1945.
 *
 * - Divide and conquer algorithm
 * - Recursion
 *
 * Compared to Quick Sort:
 *
 * - Better on all types of data
 * - More efficient
 * - Requires more space
 * 
 * Best: n log(n)
 * Average: n log(n)
 * Worst: n log(n)
 * Memory: n
 * Stable: No
 *
 * https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/merge-sort
 */

function MergeSort(originalArray: Number[]) {
  if (originalArray.length <= 1) {
    return originalArray;
  }

  // Split array on two halves.
  const middleIndex = Math.floor(originalArray.length / 2);
  const leftArray = originalArray.slice(0, middleIndex);
  const rightArray = originalArray.slice(middleIndex, originalArray.length);

  // Sort two halves of split array
  const leftSortedArray = MergeSort(leftArray);
  const rightSortedArray = MergeSort(rightArray);

  // Merge two sorted arrays into one.
  const sortedArray = [];

  // In case if arrays are not of size 1.
  while (leftSortedArray.length && rightSortedArray.length) {
    let minimumElement = null;

    if (leftSortedArray[0] < rightSortedArray[0]) {
      minimumElement = leftSortedArray.shift();
    } else {
      minimumElement = rightSortedArray.shift();
    }

    // Push the minimum element of two arrays to the sorted array.
    sortedArray.push(minimumElement);
  }

  // If one of two array still have elements we need to just concatenate
  // this element to the sorted array since it is already sorted.
  if (leftSortedArray.length) {
    sortedArray.push(...leftSortedArray);
  }

  if (rightSortedArray.length) {
    sortedArray.push(...rightSortedArray);
  }

  return sortedArray;
}

console.log(MergeSort([1, 2, 3, 4, 5]));
console.log(MergeSort([5, 4, 3, 2, 1]));
console.log(MergeSort([3, 4, 1, 2, 5]));
