// @ts-check

/**
 * @param {string} s
 * @return {string}
 */
export const longestPalindrome = function(s) {
  const longestOddString = getLongestOddString(s);
  const longestEvenString = getLongestEvenString(s);
  return longestOddString.length > longestEvenString.length
    ? longestOddString
    : longestEvenString;
};

/**
 *
 * @param {string} s
 * @return {string}
 */
function getLongestOddString(s) {
  let longest = '';
  const chars = s.split('');
  chars.forEach((char, index, chars) => {
    let distance = 0;
    while (true) {
      const charLeft = chars[index - distance - 1];
      const charRight = chars[index + distance + 1];
      if (charLeft !== undefined && charLeft === charRight) {
        distance++;
      } else {
        break;
      }
    }

    if (distance * 2 + 1 > longest.length) {
      longest = s.slice(index - distance, index + distance + 1);
    }
  });

  return longest;
}

/**
 *
 * @param {string} s
 * @return {string}
 */
function getLongestEvenString(s) {
  let longest = '';
  const chars = s.split('');
  chars.forEach((char, index, chars) => {
    const nextChar = chars[index + 1];
    if (nextChar === char) {
      let distance = 0;
      while (true) {
        const charLeft = chars[index - distance - 1];
        const charRight = chars[index + distance + 2];
        if (charLeft !== undefined && charLeft === charRight) {
          distance++;
        } else {
          break;
        }
      }

      if (distance * 2 + 2 > longest.length) {
        longest = s.slice(index - distance, index + distance + 2);
      }
    }
  });

  return longest;
}
