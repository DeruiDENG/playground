import { numIslands } from './answer';

describe('q200', function() {
  it('should work for simple test case', function() {
    const input = [
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0'],
    ];

    expect(numIslands(input)).toBe(1);
  });

  it('should work for simple test case 2', function() {
    const input = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ];

    expect(numIslands(input)).toBe(3);
  });
});
