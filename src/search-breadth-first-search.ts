/**
 * Breadth-first search (BFS) is an algorithm for traversing or searching tree
 * or graph data structures. It starts at the tree root (or some arbitrary node
 * of a graph, sometimes referred to as a 'search key') and explores the
 * neighbor nodes first, before moving to the next level neighbors.
 *
 * Requires:
 * - Queue
 * - Binary Tree Node
 *
 * Properties:
 * - Not Recursive
 *
 * https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/tree/breadth-first-search
 */

/* eslint-disable */
/// <reference types="./tree" />
/* eslint-enable */

function BreadthFirstSearch(
  root: BinaryTreeNode,
  result: Number[] = [],
) {
  const queue: BinaryTreeNode[] = [];

  queue.push(root);
  result.push(root.value);
  while (queue.length) {
    const node = queue.shift();

    if (node.left) {
      queue.push(node.left);
      result.push(node.left.value);
    }

    if (node.right) {
      queue.push(node.right);
      result.push(node.right.value);
    }
  }

  return result;
}

const bfsTree = {
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

console.log(BreadthFirstSearch(bfsTree));
