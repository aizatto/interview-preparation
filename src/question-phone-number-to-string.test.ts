/* eslint-env jest/globals */
import { phoneNumberToString } from './question-phone-number-to-string';

test('phoneNumberToString', () => {
  expect(phoneNumberToString("1234")).toBe([
    "ADG",
    "ADH",
    "ADI",
    "AEG",
    "AEH",
    "AEI",
    "AFG",
    "AFH",
    "AFI",
    "BDG",
    "BDH",
    "BDI",
    "BEG",
    "BEH",
    "BEI",
    "BFG",
    "BFH",
    "BFI",
    "CDG",
    "CDH",
    "CDI",
    "CEG",
    "CEH",
    "CEI",
    "CFG",
    "CFH",
    "CFI",
  ]);
});

