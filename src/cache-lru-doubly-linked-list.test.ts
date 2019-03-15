/* eslint-env jest/globals */

import { LRUCache } from './cache-lru-doubly-linked-list';

test('cache', () => {
  const cache = new LRUCache(3);

  const values = [
    {insert: 1, expected: [1]},
    {insert: 2, expected: [2, 1]},
    {insert: 3, expected: [3, 2, 1]},
    {insert: 4, expected: [4, 3, 2]},
    {insert: 2, expected: [2, 4, 3]},
    {insert: 1, expected: [1, 2, 4]},
  ];
  (values).forEach(({insert, expected}) => {
    cache.add(insert);
    expect(cache.toArray()).toEqual(expected)
  });
});
