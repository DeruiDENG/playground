/***
 * Simple Encryption #4 - Qwerty
 * https://www.codewars.com/kata/57f14afa5f2f226d7d0000f4/train/typescript
 */
enum Categary {
  FirstLine,
  SecondLine,
  ThirdLine,
}

interface KeyMap { type: Categary, chars: string[] }
const keyMaps: KeyMap[] = [
  {
    type: Categary.FirstLine,
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  },
  {
    type: Categary.FirstLine,
    chars: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  }, {
    type: Categary.SecondLine,
    chars: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  }, {
    type: Categary.SecondLine,
    chars: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  }, {
    type: Categary.ThirdLine,
    chars: ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.'],
  }, {
    type: Categary.ThirdLine,
    chars: ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>'],
  }
];

type EncryptionKeys = [
  { type: Categary.FirstLine, value: number },
  { type: Categary.SecondLine, value: number },
  { type: Categary.ThirdLine, value: number }
  ]

export function encrypt(text: string, key: number): string {
  const parsedKeys = parseEncryptionKey(key);
  return text.split('').map(char => processChar(char, parsedKeys, true)).join('');
}

export function decrypt(text: string, key: number): string {
  const parsedKeys = parseEncryptionKey(key);
  return text.split('').map(char => processChar(char, parsedKeys, false)).join('');
}

function parseEncryptionKey(key: number): EncryptionKeys {
  const keyDigits = `00${key.toString()}`.split('').slice(-3).map(str => parseInt(str, 10));
  return [
    { type: Categary.FirstLine, value: keyDigits[0] },
    { type: Categary.SecondLine, value: keyDigits[1] },
    { type: Categary.ThirdLine, value: keyDigits[2] }];
}

function processChar(char: string, keys: EncryptionKeys, isEncrypt: boolean) {
  const keyMap = findKeyMap(char);
  if (!keyMap) {
    return char;
  }

  const { type, chars } = keyMap;
  const { value } = keys.find(key => key.type === type);

  return findCharInArray(char, chars, isEncrypt ? value : -value);
}

function findCharInArray(currentChar: string, chars: string[], offset: number): string {
  const charsSize = chars.length;
  const currentPosition = chars.findIndex(char => char === currentChar);
  const newPosition = (currentPosition + offset) % charsSize;
  return chars[newPosition >= 0 ? newPosition : newPosition + charsSize];
}

function findKeyMap(char: string): KeyMap {
  return keyMaps.find(keyMap => keyMap.chars.some(charInMap => charInMap === char));
}
