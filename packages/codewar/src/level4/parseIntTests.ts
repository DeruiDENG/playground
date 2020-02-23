import { parseInt } from './parseInt';

describe('parseInt', function() {
  it('should pass sample tests', function() {
    expect(parseInt('one')).toBe(1);
    expect(parseInt('twenty')).toBe(20);
    expect(parseInt('two hundred forty-six')).toBe(246);
    expect(parseInt('two hundred forty-six thousand two hundred eleven')).toBe(
      246211
    );
    expect(parseInt('two hundred forty-six thousand')).toBe(246000);
    expect(parseInt('two hundred forty-six thousand eleven')).toBe(246011);
    expect(parseInt('five hundred and five thousand eleven')).toBe(505011);
    expect(
      parseInt('nine hundred seventy-two thousand one hundred and ninety-five')
    ).toBe(972195);
    expect(
      parseInt(
        'four hundred and ninety-three thousand five hundred and fifty-three'
      )
    ).toBe(493553);
  });
});
