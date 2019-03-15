/**
 *
 * Properties:
 * - Uses a few basic data structures in combination with one another
 *  - DoublyLinkedList
 *  - Map
 *    - Keys: value
 *    - Value: DoublyLinkedListNode
 * - We store the DoublyLinkedListNode in the map so that it can be easily
 *   removed.
 *
 * Notes:
 * We cannot use a JS Object `{}` because the keys have to be strings.
 */

/* eslint-disable */
/// <reference types="./data-structures" />
/* eslint-enable */

import { DoublyLinkedList } from './doubly-linked-list';

export class LRUCache {

  private hash: Map<number, DoublyLinkedListNode>;

  private doublyLinkedList: DoublyLinkedList;

  private cacheSize: number;

  constructor(cacheSize: number) {
    this.hash = new Map();
    this.doublyLinkedList = new DoublyLinkedList();
    this.cacheSize = cacheSize;
  }

  public add(value: number): this {
    const node = this.hash.get(value);
    if (node) {
      this.doublyLinkedList.remove(node);
      this.doublyLinkedList.addToHead(value);
      return this;
    }

    if (this.doublyLinkedList.getLength() === this.cacheSize) {
      const oldNode = this.doublyLinkedList.pop();
      this.hash.delete(oldNode.value);
    }

    const newNode = this.doublyLinkedList.addToHead(value);
    this.hash.set(value, newNode);

    return this;
  }

  public toString() {
    this.doublyLinkedList.toString();
  }

  public toArray(): number[] {
    return this.doublyLinkedList.toArray();
  }

}

