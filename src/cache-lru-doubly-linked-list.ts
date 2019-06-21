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

interface KeyAndValue<T> {
  key: string,
  value: T
}

export class LRUCache<T> {

  private hash: Map<string, DoublyLinkedListNode<KeyAndValue<T>>>;

  private doublyLinkedList: DoublyLinkedList<KeyAndValue<T>>;

  private cacheSize: number;

  constructor(cacheSize: number) {
    this.hash = new Map();
    this.doublyLinkedList = new DoublyLinkedList();
    this.cacheSize = cacheSize;
  }

  public get(key: string): T | null {
    const node = this.hash.get(key);
    if (!node) {
      return null;
    }

    this.doublyLinkedList.remove(node);
    this.doublyLinkedList.addToHead(node.value);
    return node.value.value;
  }

  public set(key: string, value: T): this {
    const node = this.hash.get(key);
    if (node) {
      this.doublyLinkedList.remove(node);
      this.doublyLinkedList.addToHead(node.value);
      return this;
    }

    if (this.doublyLinkedList.getLength() === this.cacheSize) {
      const oldNode = this.doublyLinkedList.pop();
      this.hash.delete(oldNode.value.key);
    }

    const newNode = this.doublyLinkedList.addToHead({key: key, value});
    this.hash.set(key, newNode);

    return this;
  }

  public toString() {
    this.doublyLinkedList.toString();
  }

  public toArray(): number[] {
    return this.doublyLinkedList.toArray();
  }

}

