import { knight } from './shortestKnightPath';

describe('shortedKnightPath', function() {
  it('should path sample test', function() {
    let arr: [string, string, number][] = [
      ['a1', 'c1', 2],
      ['a1', 'f1', 3],
      ['a1', 'f3', 3],
      ['a1', 'f4', 4],
      ['a1', 'f7', 5],
    ];
    for (let i of arr) {
      expect(knight(i[0], i[1])).toBe(i[2]);
    }
  });
});
