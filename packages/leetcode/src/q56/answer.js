// @ts-check

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

  /**
   * @type {number[][]}
   */
  const result = [];
  for (const interval of sortedIntervals) {
    const canMergeInterval = result.find(intervelInResult =>
      canMerge(intervelInResult, interval)
    );

    if (canMergeInterval) {
      canMergeInterval[0] = Math.min(canMergeInterval[0], interval[0]);
      canMergeInterval[1] = Math.max(canMergeInterval[1], interval[1]);
    } else {
      result.push(interval);
    }
  }

  return result;
};

/**
 *
 * @param {number[]} interval1
 * @param {number[]} interval2
 * @return {boolean}
 */
function canMerge(interval1, interval2) {
  return !(interval2[1] < interval1[0] || interval2[0] > interval1[1]);
}

export { merge as mergeInterval };
