import { decode, encode, frequencies } from './huffmanEncoding';

describe('Huffman encoding', function () {
  it('should happy path encode/decode work', function () {
    const frequenciesResult = frequencies('aaaabcc');
    expect(frequenciesResult).toEqual([
      ['a', 4],
      ['b', 1],
      ['c', 2],
    ]);

    const encodedResult = encode(frequenciesResult, 'aaaabcc');
    expect(encodedResult.length).toBe(10);
    expect(encodedResult).toBe('1111000101');

    const decodedResult = decode(frequenciesResult, encodedResult);
    expect(decodedResult).toBe('aaaabcc');
  });

  it('should unhappy path work', function () {
    expect(encode([], '')).toBe(null);
    expect(decode([], '')).toBe(null);
    expect(encode([['a', 1]], '')).toBe(null);
    expect(decode([['a', 1]], '')).toBe(null);
  });
});
