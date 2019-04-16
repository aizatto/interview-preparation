/* eslint-env jest/globals */
import { decompressLoop, decompressRecursion } from './question-decompress';

test('decompressLoop', () => {
  expect(decompressLoop('10[a]')).toEqual('aaaaaaaaaa');
  expect(decompressLoop('3[abc]4[ab]c')).toEqual('abcabcabcababababc');
  expect(decompressLoop('2[3[a]b]')).toEqual('aaabaaab');
});

test('decompressRecursion', () => {
  expect(decompressRecursion('10[a]').str).toEqual('aaaaaaaaaa');
  expect(decompressRecursion('3[abc]4[ab]c').str).toEqual('abcabcabcababababc');
  expect(decompressRecursion('2[3[a]b]').str).toEqual('aaabaaab');
});
