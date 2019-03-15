/* eslint-disable */
/// <reference types="./tree" />
/* eslint-enable */

import { DoublyLinkedList } from './doubly-linked-list';

interface LRUHashMap  {
  [value: number]: DoublyLinkedListNode;
}

class LRUCache {

  private hash: LRUHashMap;

  private doublyLinkedList: DoublyLinkedList;

  private cacheSize: number;

  constructor(cacheSize: number) {
    this.hash = {};
    this.doublyLinkedList = new DoublyLinkedList();
    this.cacheSize = cacheSize;
  }

  public add(value: number): this {
    const node = this.hash[value];
    if (node) {
      this.doublyLinkedList.remove(node);
      this.doublyLinkedList.addToHead(value);
      return this;
    }

    if (this.doublyLinkedList.getLength() === this.cacheSize) {
      const oldNode = this.doublyLinkedList.pop();
      delete this.hash[oldNode.value];
    }

    const newNode = this.doublyLinkedList.addToHead(value);
    this.hash[value] = newNode;

    return this;
  }

  public toString() {
    console.log(`actual: ${  this.doublyLinkedList.toString()}`);
    this.doublyLinkedList.toStdout();
    console.log(Object.keys(this.hash).toString());
    console.log();
    console.log();
    console.log();
  }

}

const cache = new LRUCache(3);
const values = [
  {insert: 1, expect: [1]},
  {insert: 2, expect: [2, 1]},
  {insert: 3, expect: [3, 2, 1]},
  {insert: 4, expect: [4, 3, 2]},
  {insert: 2, expect: [2, 4, 3]},
  {insert: 1, expect: [1, 2, 4]},
];
(values).forEach(({insert, expect}) => {
  console.log(`adding: ${insert}`);
  console.log(`expected: ${expect}`);

  cache.add(insert);
  cache.toString();
});
