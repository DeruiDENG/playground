import { triangle } from './insanedColorTriangles';

describe('insaneColorTriangles', function () {
  it('should works', function () {
    const basicCases: [string, string][] = [
      ['B', 'B'],
      ['GB', 'R'],
      ['RRR', 'R'],
      ['RGBG', 'B'],
      ['RBRGBRB', 'G'],
      ['RBRGBRBGGRRRBGBBBGG', 'G'],
    ];

    basicCases.forEach((basicCase) => {
      const [first, second] = basicCase;
      expect(triangle(first)).toBe(second);
    });
  });
});
