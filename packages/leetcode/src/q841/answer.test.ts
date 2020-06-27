import { canVisitAllRooms } from './answer';

describe('q841', function() {
  it('should work for simple case', function() {
    const input = [[1], [2], [3], []];
    const output = true;
    expect(canVisitAllRooms(input)).toBe(output);
  });

  it('should work for simple case 2', function() {
    const input = [[1, 3], [3, 0, 1], [2], [0]];
    const output = false;
    expect(canVisitAllRooms(input)).toBe(output);
  });
});
