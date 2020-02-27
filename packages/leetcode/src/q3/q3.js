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
  // Set and Map has samiliar performance, they both use HashTable as implementation
  const charsSet = new Set();
  while (endIndex < chars.length) {
    if (charsSet.has(chars[endIndex])) {
      charsSet.delete(chars[startIndex]);
      startIndex++;
    } else {
      charsSet.add(chars[endIndex]);
      endIndex++;
      answer = Math.max(answer, endIndex - startIndex);
    }
  }

  return answer;
};
