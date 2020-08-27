// @ts-check
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const words = s.trim().split(/\s+/);
  words.reverse();
  return words.join(' ');
};

export { reverseWords };
