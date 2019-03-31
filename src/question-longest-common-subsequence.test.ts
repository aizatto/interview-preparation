/* eslint-env jest/globals */

import { longestCommonSubsequence } from './question-longest-common-subsequence';

test('longestCommonSubsequence', () => {
  expect(longestCommonSubsequence('ABAZDC', 'BACBAD')).toEqual('ABAD');
  expect(longestCommonSubsequence('AGGTAB', 'GXTXAYB')).toEqual('GTAB');
  expect(longestCommonSubsequence('aaaa', 'aa')).toEqual('aa');
});

