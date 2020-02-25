// @ts-check

/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLongestSubstring = function(s) {
  let startIndex = 0;
  let endIndex = 0;
  while (endIndex < s.length) {
    const subString = s.slice(startIndex, endIndex + 1);
    if (isContainingDuplicateChar(subString)) {
      endIndex++;
      startIndex++;
    } else {
      endIndex++;
    }
  }

  return endIndex - startIndex;
};

/**
 *
 * @param {string} s
 */
function isContainingDuplicateChar(s) {
  const chars = s.split('');
  const set = new Set(chars);
  return set.size !== chars.length;
}
