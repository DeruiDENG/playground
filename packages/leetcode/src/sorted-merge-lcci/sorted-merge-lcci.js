// @ts-check

/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
export const merge = function(A, m, B, n) {
  A.splice(m);
  A.push(...B);
  A.sort((a, b) => a - b);
};
