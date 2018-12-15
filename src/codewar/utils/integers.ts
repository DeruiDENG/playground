/**
 * Get array of integers that are larger than start and smaller than end
 * @param start start integer(inclusive)
 * @param end end integer(inclusive)
 */
export function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (num, index) => index + start);
}
