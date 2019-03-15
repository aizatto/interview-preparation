// https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list

interface LinkedListNode {
  value: number,
  next?: LinkedListNode,
}

interface DoublyLinkedListNode {
  value: number,
  next?: DoublyLinkedListNode,
  previous?: DoublyLinkedListNode,
}

// https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/doubly-linked-list

interface BinaryTreeNode {
  value: number,
  left?: BinaryTreeNode,
  right?: BinaryTreeNode,
}

