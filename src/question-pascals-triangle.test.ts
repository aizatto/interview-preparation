/* eslint-env jest/globals */
import { pascalsTriangle} from "./question-pascals-triangle"

test('pascalsTriangle', () => {
  expect(pascalsTriangle(5)).toBe("1 4 6 4 1");
});
