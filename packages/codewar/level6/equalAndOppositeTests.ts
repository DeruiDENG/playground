import { a, b, findMatch } from './equalAndOpposite';

describe('equalAndOpposite', function () {
  it('should a be falsey', function () {
    a.forEach(ele => expect(!ele).toBe(true));
  });

  it('should b be truthy', function () {
    b.forEach(ele => expect(!!ele).toBe(true));
  });

  it('should findMatch', function () {
    expect(findMatch()).toBeTruthy();
  });
});
