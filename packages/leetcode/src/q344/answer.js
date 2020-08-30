// @ts-check

/**
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let lPtr = 0;
  let rPtr = s.length - 1;
  while (lPtr < rPtr) {
    const temp = s[rPtr];
    s[rPtr] = s[lPtr];
    s[lPtr] = temp;
    lPtr++;
    rPtr--;
  }
};

export { reverseString };
