/* eslint-env jest/globals */
import { strstr } from './question-strstr';

test('phoneNumberToString', () => {
  expect(strstr("abcdefgh", "efg")).toBe(4);
  expect(strstr("abcdefgh", "")).toBe(-1);
  expect(strstr("a star is born", "orn")).toBe(11);
});

