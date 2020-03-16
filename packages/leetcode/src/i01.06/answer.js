// @ts-check

/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
  const encodedString = getEncodedString(S);
  return encodedString.length < S.length ? encodedString : S;
};

/**
 * @param {string} s
 * @return {string}
 */
function getEncodedString(s) {
  let result = '';
  const chars = Array.from(s);
  let currentChar = chars[0];
  let count = 0;
  for (const char of chars) {
    if (currentChar === char) {
      count++;
    } else {
      result = result.concat(currentChar, count.toString());
      currentChar = char;
      count = 1;
    }
  }

  result = result.concat(currentChar, count.toString());
  return result;
}

export { compressString };
