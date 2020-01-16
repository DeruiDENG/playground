import { calculate } from './routeCalculator';

describe('operate', function () {
  it('should return a valid single input number', function () {
    expect(calculate('1')).toBe(1);
    expect(calculate('1.1')).toBe(1.1);
  });

  it('should perform simple single operations', function () {
    expect(calculate('1+1')).toBe(2);
    expect(calculate('1-1')).toBe(0);
    expect(calculate('2$2')).toBe(1);
    expect(calculate('2*2')).toBe(4);
  });

  it('should work with decimal numbers', function () {
    expect(calculate('1.1+1.9')).toBe(3);
    expect(calculate('9$4')).toBe(2.25);
    expect(calculate('1.5*3')).toBe(4.5);
    expect(calculate('5-43.2')).toBe(-38.2);
  });

  it('should accept many of same operator', function () {
    expect(calculate('5+5+5+5')).toBe(20);
    expect(calculate('5-5-5-5')).toBe(-10);
    expect(calculate('5*5*5*5')).toBe(625);
    expect(calculate('5$5$5$5')).toBe(0.04);
  });

  it('should calculate everything thrown at it', function () {
    expect(calculate('1+1-1')).toBe(1);
    expect(calculate('5*6$2+5-10')).toBe(10);
    expect(calculate('1*1*1*1*1*1$1$1$1$1+1-1+9-1')).toBe(9);
    expect(calculate('1000$2.5$5+5-5+6$6')).toBe(81);
  });

  it('should throw input error for bad inputs', function () {
    expect(calculate('5*6$2&5-10')).toBe('400: Bad request');
    expect(calculate('5/10')).toBe('400: Bad request');
    expect(calculate('p')).toBe('400: Bad request');
    expect(calculate('9^9')).toBe('400: Bad request');
  });
});
