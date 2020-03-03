// @ts-check

/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
export const merge = function(A, m, B, n) {
  while (B.length) {
    const val = B.pop();
    const insertIndex = findInsertIndex(A.slice(0, m), val);
    A.splice(insertIndex + 1, 0, val);
    m++;
  }

  A.splice(m);
};

/**
 * @param {number[]} sortedArr
 * @param {number} val
 * @return {number} Index of element that should insert after
 */
function findInsertIndex(sortedArr, val) {
  if (sortedArr.length === 0) {
    return -1;
  }

  if (val <= sortedArr[0]) {
    return -1;
  }

  if (val >= sortedArr[sortedArr.length - 1]) {
    return sortedArr.length - 1;
  }

  let startIndex = 0;
  let endIndex = sortedArr.length;
  while (endIndex - startIndex > 1) {
    const tryIndex = Math.floor((endIndex + startIndex) / 2);
    const tryVal = sortedArr[tryIndex];
    if (tryVal < val) {
      startIndex = tryIndex;
    } else {
      endIndex = tryIndex;
    }
  }

  return startIndex;
}
