/**
 * Bubble sort, sometimes referred to as sinking sort, is a simple sorting
 * algorithm that repeatedly steps through the list to be sorted, compares each
 * pair of adjacent items and swaps them if they are in the wrong order
 * (ascending or descending arrangement). The pass through the list is repeated
 * until no swaps are needed, which indicates that the list is sorted.
 *
 * Cons:
 * - Heavy Writes
 * 
 * Best: n
 * Average: n^2
 * Worst: n^2
 * Memory: 1
 * Stable: Yes
 *
 * https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/bubble-sort
 * https://en.wikipedia.org/wiki/Bubble_sort
 * https://www.youtube.com/watch?v=6Gv8vg0kcHc&index=27&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8
 */

function BubbleSort(originalArray: Number[]) {
  const array = [...originalArray];

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[i]) {
        const tmp = array[j];
        array[j] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

console.log(BubbleSort([1, 2, 3, 4, 5]));
console.log(BubbleSort([5, 4, 3, 2, 1]));
console.log(BubbleSort([3, 4, 1, 2, 5]));
