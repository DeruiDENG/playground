import { MaxQueue } from './i59';

describe('i59', () => {
  it('should work for `1,2,pop`', () => {
    const obj = new MaxQueue();
    obj.push_back(1);
    obj.push_back(2);
    expect(obj.max_value()).toBe(2);
    expect(obj.pop_front()).toBe(1);
    expect(obj.max_value()).toBe(2);
  });

  it('should work for `pop`', () => {
    const obj = new MaxQueue();
    expect(obj.max_value()).toBe(-1);
    expect(obj.pop_front()).toBe(-1);
  });
});
