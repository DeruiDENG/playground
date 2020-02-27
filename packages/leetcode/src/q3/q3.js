// @ts-check

/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLongestSubstring = function(s) {
  const chars = s.split('');
  let startIndex = 0;
  let endIndex = 0;
  let answer = 0;
  const charsMap = new Map();
  while (endIndex < chars.length) {
    if (charsMap.has(chars[endIndex])) {
      charsMap.delete(chars[startIndex]);
      startIndex++;
    } else {
      charsMap.set(chars[endIndex], chars[endIndex]);
      endIndex++;
      answer = Math.max(answer, endIndex - startIndex);
    }
  }

  return answer;
};
