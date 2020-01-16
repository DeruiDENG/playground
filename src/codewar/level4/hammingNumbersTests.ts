import { hamming } from './hammingNumbers';

describe('hammingNumbers', function () {
  it('should work', function () {
    expect(hamming(1)).toBe(1);
    expect(hamming(2)).toBe(2);
    expect(hamming(3)).toBe(3);
    expect(hamming(4)).toBe(4);
    expect(hamming(5)).toBe(5);
    expect(hamming(6)).toBe(6);
    expect(hamming(7)).toBe(8);
    expect(hamming(8)).toBe(9);
    expect(hamming(9)).toBe(10);
    expect(hamming(10)).toBe(12);
    expect(hamming(11)).toBe(15);
    expect(hamming(12)).toBe(16);
    expect(hamming(13)).toBe(18);
    expect(hamming(14)).toBe(20);
    expect(hamming(15)).toBe(24);
    expect(hamming(16)).toBe(25);
    expect(hamming(17)).toBe(27);
    expect(hamming(18)).toBe(30);
    expect(hamming(19)).toBe(32);
  });
});
