import { openLock } from './answer';

describe('q752', function() {
  it('should work for simple test case', function() {
    const input1 = ['0201', '0101', '0102', '1212', '2002'];
    const input2 = '0202';

    expect(openLock(input1, input2)).toBe(6);
  });
});
