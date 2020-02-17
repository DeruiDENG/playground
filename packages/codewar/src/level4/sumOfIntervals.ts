/**
 * Sum of Intervals
 * https://www.codewars.com/kata/sum-of-intervals
 */
import { range } from '../utils/integers';
import { uniq } from '../utils/array';

export function sumIntervals(intervals: number[][]): number {
  const intervalIndexes: number[] = [];
  for (const [start, end] of intervals) {
    intervalIndexes.push(...range(start, end - 1));
  }

  return uniq(intervalIndexes).length;
}
