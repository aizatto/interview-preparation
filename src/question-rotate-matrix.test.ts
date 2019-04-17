/* eslint-env jest/globals */
import { rotateMatrix } from "./question-rotate-matrix"

test('rotateMatrix', () => {
  expect(rotateMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])).toEqual([
    [5, 1, 2, 3],
    [9, 10, 6, 4],
    [13, 11, 7, 8],
    [14, 15, 16, 12],
  ]);
});
