/**
 * Evens and Odds
 * https://www.codewars.com/kata/evens-and-odds/train/typescript
 */

export function evensAndOdds(n: number): string {
  return n % 2 === 0 ? n.toString(2) : n.toString(16);
}
