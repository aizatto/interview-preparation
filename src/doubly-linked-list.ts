/**
 *
 * https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/doubly-linked-list
 */

/* eslint-disable */
/// <reference types="./data-structures" />
/* eslint-enable */

/**
 * Properties:
 * - Adds to Head
 * - Given a node, can remove it from the linked list
 * - Pops from the tail
 */
export class DoublyLinkedList {
  private length: number = 0;

  private head: DoublyLinkedListNode;

  private tail: DoublyLinkedListNode;

  construct() {
    this.head = null;
    this.tail = null;
  }

  public getLength(): number {
    return this.length;
  }

  public addToHead(value: number) {
    const node = {
      value,
      next: this.head,
      previous: null,
    }

    if (this.head) {
      this.head.previous = node;
    } else {
      this.tail = node;
    }

    this.head = node;

    this.length += 1;
    return node;
  }

  /*
   * Concerns:
   * - Doesn't validate that this node belongs to this DoublyLinkedList
   */
  public remove(node: DoublyLinkedListNode) {
    const {next, previous} = node;

    if (previous) {
      previous.next = next;
    } else {
      // If we are removing from the head, it's going to be empty
      this.head = null;
    }

    if (next) {
      next.previous = previous;
    }

    // If we are removing from the tail, we need to assign a new tail
    if (this.tail === node) {
      this.tail = previous;
    }

    this.length -= 1;
  }

  public pop(): DoublyLinkedListNode | null {
    if (!this.tail) {
      return null;
    }

    const node = this.tail;
    const {previous} = node;

    this.tail = previous;
    previous.next = null;

    this.length -= 1;
    return node;
  }

  public toString() {
    let node = this.head;
    const values = [];
    const debug = [];
    while (node) {
      const print = {
        value: node.value,
        next: node.next ? node.next.value : null,
        previous: node.previous ? node.previous.value : null,
      }

      debug.push(JSON.stringify(print));

      values.push(node.value);
      node = node.next
    }

    return `${values.toString()  }\n${  debug.toString()}`;;
  }

  public toArray(): number[] {
    let node = this.head;
    const values = [];
    while (node) {
      values.push(node.value);
      node = node.next
    }

    return values;
  }

}
