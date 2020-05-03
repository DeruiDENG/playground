// @ts-check

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  if (deadends.includes('0000')) {
    return -1;
  }

  if (target === '0000') {
    return 0;
  }

  /**
   *
   * @type {Map<string, number>}
   */
  const depthMap = new Map();
  depthMap.set('0000', 0);
  /**
   * @type {string[]}
   */
  const queue = ['0000'];
  while (queue.length) {
    const value = queue.shift();
    const depth = depthMap.get(value);
    const nextValues = findPossibleNextLockState(value);
    for (const nextValue of nextValues) {
      if (deadends.includes(nextValue)) {
        continue;
      }

      if (nextValue === target) {
        return depth + 1;
      }

      if (depthMap.get(nextValue) === undefined) {
        queue.push(nextValue);
        depthMap.set(nextValue, depth + 1);
      }
    }
  }

  return -1;
};

/**
 *
 * @param {string} currentState
 * @return {string[]}
 */
function findPossibleNextLockState(currentState) {
  const digits = Array.from(currentState).map(digit =>
    Number.parseInt(digit, 10)
  );
  return [
    [(digits[0] + 1) % 10, digits[1], digits[2], digits[3]],
    [(digits[0] + 9) % 10, digits[1], digits[2], digits[3]],
    [digits[0], (digits[1] + 1) % 10, digits[2], digits[3]],
    [digits[0], (digits[1] + 9) % 10, digits[2], digits[3]],
    [digits[0], digits[1], (digits[2] + 1) % 10, digits[3]],
    [digits[0], digits[1], (digits[2] + 9) % 10, digits[3]],
    [digits[0], digits[1], digits[2], (digits[3] + 1) % 10],
    [digits[0], digits[1], digits[2], (digits[3] + 9) % 10],
  ].map(digits => digits.join(''));
}

export { openLock };
