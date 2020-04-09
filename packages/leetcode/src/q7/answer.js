/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31);
  let result = 0;

  const digits = Array.from(x.toString());
  if (x < 0) {
    result = Number.parseInt(['-', ...digits.slice(1).reverse()].join(''));
  } else {
    result = Number.parseInt(digits.reverse().join(''));
  }

  if (x < MIN || x > MAX || result < MIN || result > MAX) {
    return 0;
  }

  return result;
};

export { reverse };
