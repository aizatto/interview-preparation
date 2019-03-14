/**
 * Insertion sort is a simple sorting algorithm that builds the final sorted
 * array (or list) one item at a time. It is much less efficient on large lists
 * than more advanced algorithms such as quicksort, heapsort, or merge sort.
 * 
 * Best: n
 * Average: n^2
 * Worst: n^2
 * Memory: 1
 * Stable: Yes
 *
 * https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/insertion-sort
 */

function InsertionSort(originalArray: Number[]) {
  const array = [...originalArray];

  for (let i = 1; i < array.length; i++) {
    let j = i;

    while (j < array.length && array[j] < array[j - 1]) {
      const tmp = array[j - 1];
      array[j - 1] = array[j];
      array[j] = tmp;
      j -= 1;
    }
  }

  return array;
}

console.log(InsertionSort([1, 2, 3, 4, 5]));
console.log(InsertionSort([5, 4, 3, 2, 1]));
console.log(InsertionSort([3, 4, 1, 2, 5]));
