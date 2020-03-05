import { distributeCandies } from './q1103';

describe('q1103', () => {
  it('should work for `7, 4`', () => {
    const candies = 7,
      numPeople = 4;
    const expected = [1, 2, 3, 1];
    const result = distributeCandies(candies, numPeople);
    expect(result).toEqual(expected);
  });

  it('should work for `60, 4`', () => {
    const candies = 60,
      numPeople = 4;
    const expected = [15, 18, 15, 12];
    const result = distributeCandies(candies, numPeople);
    expect(result).toEqual(expected);
  });
});
