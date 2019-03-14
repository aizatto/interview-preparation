/**
 * Selection sort is a sorting algorithm, specifically an in-place comparison
 * sort. It has O(n2) time complexity, making it inefficient on large lists, and
 * generally performs worse than the similar insertion sort. Selection sort is
 * noted for its simplicity, and it has performance advantages over more
 * complicated algorithms in certain situations, particularly where auxiliary
 * memory is limited.
 *
 * Pros:
 * - Low Writes
 * 
 * Best: n^2
 * Average: n^2
 * Worst: n^2
 * Memory: 1
 * Stable: No
 *
 * https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/selection-sort
 */

function SelectionSort(originalArray: Number[]) {
  const array = [...originalArray];

  if (array.length <= 1) {
    return array;
  }

  for (let i = 0; i < array.length; i++) {
    let indexToSwap = i;
    let smallest = array[i];

    for (let j = i; j < array.length; j++) {
      if (array[j] < smallest) {
        indexToSwap = j;
        smallest = array[j];
      }
    }

    if (i !== indexToSwap) {
      const tmp = array[indexToSwap];
      array[indexToSwap] = array[i];
      array[i] = tmp;
    }
  }

  return array;
}

console.log(SelectionSort([1, 2, 3, 4, 5]));
console.log(SelectionSort([5, 4, 3, 2, 1]));
console.log(SelectionSort([3, 4, 1, 2, 5]));
