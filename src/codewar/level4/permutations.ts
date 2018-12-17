/**
 * Permutations
 * https://www.codewars.com/trainer/javascript
 */
import { remove, uniq } from '../utils/array';

export function permutations(str: string): string[] {
  const chars = str.split('');
  const results = generateVariance('', chars);
  return uniq(results);
}

function generateVariance(prefix: string, chars: string[]): string[] {
  if (chars.length === 1) {
    return [`${prefix}${chars[0]}`];
  } else {
    let result: string[] = [];
    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];
      const newPrefix = `${prefix}${char}`;
      const newChars = remove(chars, char);
      result = [...result, ...generateVariance(newPrefix, newChars)];
    }

    return result;
  }
}
