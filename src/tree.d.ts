// https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list

interface LinkedList {
  value: Number,
  next?: LinkedList,
}

interface DoublyLinkedList {
  value: Number,
  next?: DoublyLinkedList,
  previous?: DoublyLinkedList,
}

// https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/doubly-linked-list

interface BinaryTreeNode {
  value: Number,
  left?: BinaryTreeNode,
  right?: BinaryTreeNode,
}

