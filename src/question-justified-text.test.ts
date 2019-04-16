/* eslint-env jest/globals */
import { fullJustify} from './question-justified-text';

test('decompressLoop', () => {
  expect(fullJustify(
    [],
    10,
  )).toEqual(
    [""]
  );

  expect(fullJustify(
    ["This", "is", "an", "example", "of", "text", "justification."],
    16,
  )).toEqual([
     "This    is    an",
     "example  of text",
     "justification.  ",
  ]);

  expect(fullJustify(
    [ "What", "must", "be", "shall", "be." ],
    12,
  )).toEqual([
    "What must be",
    "shall be.   ",
  ]);
});
