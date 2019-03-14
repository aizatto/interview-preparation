/**
 * In computer science, binary search, also known as half-interval search,
 * logarithmic search, or binary chop, is a search algorithm that finds the
 * position of a target value within a sorted array. Binary search compares the
 * target value to the middle element of the array; if they are unequal, the
 * half in which the target cannot lie is eliminated and the search continues on
 * the remaining half until it is successful. If the search ends with the
 * remaining half being empty, the target is not in the array.
 *
 * Requires:
 * - Sorted array
 *
 * Alternatives:
 * - Loop / Non recursive
 *
 * https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/search/binary-search
 */

function BinarySearchRecursion(array: number[], value: number) {
  return BinarySearchRecursiveCall(
    array,
    value,
    0,
    array.length - 1,
    [],
  );
}

interface Searches {
  startIndex: number,
  endIndex: number,
}

function BinarySearchRecursiveCall(
  array: number[],
  value: number,
  startIndex: number,
  endIndex: number,
  search: Searches[]
) {
  if (startIndex === endIndex) {
    const middleIndex = startIndex;
    const middleValue = array[middleIndex];

    if (middleValue === value) {
      return {
        index: middleIndex,
        search,
      }
    } 
      return {
        index: -1,
        search,
      }
    
  }

  search.push({
    startIndex,
    endIndex,
  });

  const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
  const middleValue = array[middleIndex];

  if (middleValue === value) {
    return {
      index: middleIndex,
      search,
    }
  }
  
  if (middleValue < value) {
    return BinarySearchRecursiveCall(
      array,
      value,
      middleIndex + 1,
      endIndex,
      search
    );
  } 
    return BinarySearchRecursiveCall(
      array,
      value,
      startIndex,
      middleIndex - 1,
      search
    );
  
}

console.log(BinarySearchRecursion([5, 4, 1, 2, 3], 3));
