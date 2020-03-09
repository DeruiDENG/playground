// @ts-check

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
export const convert = function(s, numRows) {
  const rows = Array.from(Array(numRows)).map(row => []);
  const rowNumberGetter = getRowNumberGetter(numRows);
  for (const char of s.split('')) {
    const rowNumber = rowNumberGetter.next();
    rows[rowNumber].push(char);
  }

  return rows.map(row => row.join('')).join('');
};

/**
 *
 * @param {number} numRows
 * @return {{next: ()=>number}}
 */
function getRowNumberGetter(numRows) {
  if (numRows === 1) {
    return { next: () => 0 };
  }
  let index = 0;
  let adding = true;
  return {
    next: () => {
      if (index === 0) {
        adding = true;
      }
      if (index === numRows - 1) {
        adding = false;
      }

      const saved = index;
      if (adding) {
        index++;
      } else {
        index--;
      }

      return saved;
    },
  };
}
