/**
 * Huffman Encoding
 * https://www.codewars.com/kata/huffman-encoding/train/javascript
 */

type Frequency = [string, number];
interface HuffmanChunk {
  type: 'chunk';
  frequency: number;
  leftLeaf: HuffmanChunk | HuffmanLeave;
  rightLeaf: HuffmanChunk | HuffmanLeave;
}
interface HuffmanLeave {
  type: 'leave';
  char: string;
  frequency: number;
}
type HuffmanRoot = HuffmanChunk | HuffmanLeave;

// takes: String; returns: [ [String,Int] ] (Strings in return value are single characters)
export function frequencies(s: string): Frequency[] {
  const frequencyObj: object = {};
  for (const char of s.split('')) {
    if (frequencyObj[char]) {
      frequencyObj[char]++;
    } else {
      frequencyObj[char] = 1;
    }
  }

  return Object.entries(frequencyObj);
}

function buildHuffmanTree(frequencies: Frequency[]): HuffmanRoot {
  let labeledFrequencies: HuffmanRoot[] = frequencies.map(
    ([char, frequency]): HuffmanLeave => ({
      frequency,
      char,
      type: 'leave',
    })
  );
  if (labeledFrequencies.length === 0) {
    return null;
  }

  if (labeledFrequencies.length === 1) {
    return labeledFrequencies[0];
  }

  let sortedFrequencies = sortFrequencies(labeledFrequencies);
  while (sortedFrequencies.length > 1) {
    const newElement: HuffmanChunk = {
      type: 'chunk',
      frequency:
        sortedFrequencies[0].frequency + sortedFrequencies[1].frequency,
      leftLeaf: sortedFrequencies[0],
      rightLeaf: sortedFrequencies[1],
    };
    sortedFrequencies = sortFrequencies([
      ...sortedFrequencies.slice(2),
      newElement,
    ]);
  }

  return sortedFrequencies[0];
}

function buildDictionary(frequencies: Frequency[]) {
  const huffmanTree = buildHuffmanTree(frequencies);
  if (!huffmanTree) {
    return null;
  }

  if (huffmanTree.type === 'leave') {
    return { [huffmanTree.char]: '0' };
  }

  let acc = '';
  let dictionary: any = {};
  buildDictionaryRecursive(dictionary, acc, huffmanTree);

  return dictionary;
}

function buildDictionaryRecursive(
  dictionary: any,
  acc: string,
  treeNode: HuffmanRoot
) {
  if (treeNode.type === 'chunk') {
    buildDictionaryRecursive(dictionary, `${acc}0`, treeNode.leftLeaf);
    buildDictionaryRecursive(dictionary, `${acc}1`, treeNode.rightLeaf);
  } else {
    const { char } = treeNode;
    dictionary[char] = acc;
  }
}

function sortFrequencies(frequencies: HuffmanRoot[]): HuffmanRoot[] {
  return [...frequencies].sort(
    (frequency1, frequency2) => frequency1.frequency - frequency2.frequency
  );
}

function encodeUsingDictionary(s: string, dictionary: any) {
  return s
    .split('')
    .map((char): string => dictionary[char])
    .join('');
}

export function encode(freqs: Frequency[], s: string) {
  if (!freqs || freqs.length <= 1) {
    return null;
  }

  const dictionary = buildDictionary(freqs);
  if (dictionary) {
    return encodeUsingDictionary(s, dictionary);
  }

  return null;
}

export function decode(freqs: Frequency[], bits: string): string {
  if (!freqs || freqs.length <= 1) {
    return null;
  }

  const huffmanTree = buildHuffmanTree(freqs);
  if (!huffmanTree) {
    return null;
  }

  if (huffmanTree.type === 'leave') {
    return bits
      .split('')
      .map(() => huffmanTree.char)
      .join('');
  }

  let huffmanTreePointer = huffmanTree;
  let decodeResult = '';
  for (const bit of bits.split('')) {
    if (bit === '0') {
      const { leftLeaf } = huffmanTreePointer;
      if (leftLeaf.type === 'leave') {
        decodeResult = `${decodeResult}${leftLeaf.char}`;
        huffmanTreePointer = huffmanTree;
      } else {
        huffmanTreePointer = leftLeaf;
      }
    } else {
      const { rightLeaf } = huffmanTreePointer;
      if (rightLeaf.type === 'leave') {
        decodeResult = `${decodeResult}${rightLeaf.char}`;
        huffmanTreePointer = huffmanTree;
      } else {
        huffmanTreePointer = rightLeaf;
      }
    }
  }

  return decodeResult;
}
