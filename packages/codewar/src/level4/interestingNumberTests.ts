import { Kata } from './interestingNumber';

describe('interestingNumber', function() {
  describe('IsExactlyInteresting', function() {
    it('Should check digit followed by all zeros', function() {
      expect(Kata.isExactlyInteresting(1000, [])).toBe(true);
      expect(Kata.isExactlyInteresting(100, [])).toBe(true);
      expect(Kata.isExactlyInteresting(9001, [])).toBe(false);
      expect(Kata.isExactlyInteresting(1200, [])).toBe(false);
    });

    it('Should check number shorter than 3 digits', function() {
      expect(Kata.isExactlyInteresting(90, [])).toBe(false);
      expect(Kata.isExactlyInteresting(11, [])).toBe(false);
    });

    it('Should check same digits', function() {
      expect(Kata.isExactlyInteresting(111, [])).toBe(true);
      expect(Kata.isExactlyInteresting(99999, [])).toBe(true);
      expect(Kata.isExactlyInteresting(1112, [])).toBe(false);
      expect(Kata.isExactlyInteresting(2111, [])).toBe(false);
    });

    it('Should check increment sequential digits', function() {
      expect(Kata.isExactlyInteresting(123, [])).toBe(true);
      expect(Kata.isExactlyInteresting(890, [])).toBe(true);
      expect(Kata.isExactlyInteresting(5678, [])).toBe(true);
      expect(Kata.isExactlyInteresting(901, [])).toBe(false);
    });

    it('Should check decrement sequential digits', function() {
      expect(Kata.isExactlyInteresting(321, [])).toBe(true);
      expect(Kata.isExactlyInteresting(210, [])).toBe(true);
      expect(Kata.isExactlyInteresting(87654, [])).toBe(true);
      expect(Kata.isExactlyInteresting(109, [])).toBe(false);
    });

    it('Should check palindrome number', function() {
      expect(Kata.isExactlyInteresting(131, [])).toBe(true);
      expect(Kata.isExactlyInteresting(13531, [])).toBe(true);
      expect(Kata.isExactlyInteresting(2442, [])).toBe(true);
      expect(Kata.isExactlyInteresting(24544, [])).toBe(false);
      expect(Kata.isExactlyInteresting(33533, [])).toBe(true);
    });

    it('Should check awesomePhrases', function() {
      expect(Kata.isExactlyInteresting(134, [111, 112, 113])).toBe(false);
      expect(Kata.isExactlyInteresting(134, [111, 112, 134])).toBe(true);
      expect(Kata.isExactlyInteresting(13531, [135])).toBe(true);
    });
  });

  describe('IsInteresting', function() {
    it('Should check digit followed by all zeros', function() {
      expect(Kata.isInteresting(1000, [])).toBe(2);
      expect(Kata.isInteresting(1002, [])).toBe(0);
      expect(Kata.isInteresting(998, [])).toBe(1);
      expect(Kata.isInteresting(1453, [])).toBe(0);
    });
  });
});
