import { playground } from './index';

describe('run playground', () => {
  test('should work as expected', () => {
    expect(() => playground()).not.toThrow();
  });
});
