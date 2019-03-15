/**
 * Depth-first search (DFS) is an algorithm for traversing or searching tree or
 * graph data structures. One starts at the root (selecting some arbitrary node
 * as the root in the case of a graph) and explores as far as possible along
 * each branch before backtracking.
 *
 * Requires:
 * - Recursion
 * - Binary Tree Node
 *
 * Properties:
 * - Recursive
 *
 * https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/tree/depth-first-search
 */

/* eslint-disable */
/// <reference types="./data-structures" />
/* eslint-enable */

function DepthFirstSearch(
  root: BinaryTreeNode,
  result: Number[] = [],
) {
  result.push(root.value);

  if (root.left) {
    DepthFirstSearch(root.left, result);
  }

  if (root.right) {
    DepthFirstSearch(root.right, result);
  }

  return result;
}

const dfsTree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: {
        value: 7,
      }
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
    },
    right: {
      value: 6
    }
  },
};

console.log(DepthFirstSearch(dfsTree));
