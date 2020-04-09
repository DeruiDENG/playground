import { letterCombinations } from './answer';
describe('q17', function() {
  it('should work for 23', function() {
    const expected = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
    const result = letterCombinations('23');
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result.length).toBe(expected.length);
  });
});
