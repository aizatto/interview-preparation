/**
 *
 * Divide and conquer algorithm
 *
 * - Works best on small arrays
 * - Inefficient for larger ararays
 * 
 * Best: n log(n)
 * Average: n log(n)
 * Worst: n^2
 * Memory: log(n)
 * Stable: No
 *
 * https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/quick-sort
 */

function QuickSort(originalArray: Number[]) {
  const array = [...originalArray];

  if (array.length <= 1) {
    return array;
  }


  // Init left and right arrays.
  const leftArray = [];
  const rightArray = [];

  // Take the first element of array as a pivot.
  const pivotElement = array.shift();
  const centerArray = [pivotElement];

  while (array.length) {
    const currentElement = array.shift();

    if (currentElement === pivotElement) {
      centerArray.push(currentElement);
    } else if (currentElement < pivotElement) {
      leftArray.push(currentElement);
    } else {
      rightArray.push(currentElement);
    }
  }

  const leftArraySorted = QuickSort(leftArray);
  const rightArraySorted = QuickSort(rightArray);

  return leftArraySorted.concat(centerArray, rightArraySorted);
}

console.log(QuickSort([1, 2, 3, 4, 5]));
console.log(QuickSort([5, 4, 3, 2, 1]));
console.log(QuickSort([3, 4, 1, 2, 5]));

