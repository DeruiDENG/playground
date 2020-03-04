import { convert } from './q6';

describe('q6', () => {
  it('should work for `PAYPALISHIRING row 3`', () => {
    const s = 'PAYPALISHIRING',
      numRows = 3;
    const expected = 'PAHNAPLSIIGYIR';
    const result = convert(s, numRows);
    expect(result).toBe(expected);
  });

  it('should work for `PAYPALISHIRING row 4`', () => {
    const s = 'PAYPALISHIRING',
      numRows = 4;
    const expected = 'PINALSIGYAHRPI';
    const result = convert(s, numRows);
    expect(result).toBe(expected);
  });
});
