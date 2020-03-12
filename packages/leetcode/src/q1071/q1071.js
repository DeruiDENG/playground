// @ts-check

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
export const gcdOfStrings = function(str1, str2) {
  const shortestSubstring1 = getShortestRepeatableString(str1);
  const shortestSubstring2 = getShortestRepeatableString(str2);
  if (shortestSubstring1 === shortestSubstring2) {
    const gcd = getGcd(
      str1.length / shortestSubstring1.length,
      str2.length / shortestSubstring2.length
    );

    return shortestSubstring1.repeat(gcd);
  }

  return '';
};

/**
 * @param {string} str
 * @return {string}
 */
function getShortestRepeatableString(str) {
  for (let i = 1; i <= str.length; i++) {
    if (str.length % i === 0) {
      const substring = str.substring(0, i);
      if (substring.repeat(str.length / i) === str) {
        return substring;
      }
    }
  }
}

/**
 * Get greatest common divisor
 * @param {number} val1
 * @param {number} val2
 * @return {number}
 */
function getGcd(val1, val2) {
  if (val2 === 0) {
    return val1;
  } else {
    return getGcd(val2, val1 % val2);
  }
}
