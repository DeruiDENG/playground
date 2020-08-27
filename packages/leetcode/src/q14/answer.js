// @ts-check
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return '';
  }

  const commonChars = [];
  let index = 0;
  while (true) {
    if (
      strs.some(str => str.length < index + 1 || str[index] !== strs[0][index])
    ) {
      break;
    }

    commonChars.push(strs[0][index]);
    index++;
  }

  return commonChars.join('');
};

export { longestCommonPrefix };
