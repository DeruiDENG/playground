import { undoRedo } from './undoRedo';

describe('undoRedo', function () {
  it('should get/set works', function () {
    const obj = {
      x: 1,
      y: 2,
    };
    const unRe = undoRedo(obj);
    expect(unRe.get('x')).toBe(1);
    unRe.set('x', 3);
    expect(unRe.get('x')).toBe(3);
  });

  it('should simple undo works', function () {
    const obj = {
      x: 1,
      y: 2,
    };
    const unRe = undoRedo(obj);
    unRe.set('y', 10);
    expect(unRe.get('y')).toBe(10);
    unRe.undo();
    expect(unRe.get('y')).toBe(2);
    try {
      expect(unRe.undo()).toThrow();
    } catch (e) {
      expect(unRe.get('y')).toBe(2);
    }
  });

  it('should simple redo works', function () {
    const obj = {
      x: 1,
      y: 2,
    };

    const unRe = undoRedo(obj);
    unRe.set('y', 10);
    expect(unRe.get('y')).toBe(10);
    unRe.undo();
    expect(unRe.get('y')).toBe(2);
    unRe.redo();
    expect(unRe.get('y')).toBe(10);
    try {
      unRe.redo();
      expect(false).toBeTruthy();
    } catch (e) {
      expect(unRe.get('y')).toBe(10);
    }
  });

  it('should chained get/set/undo/redo works', function () {
    const obj = {
      x: 1,
      y: 2,
    };

    const unRe = undoRedo(obj);
    unRe.set('y', 10);
    unRe.set('y', 100);
    unRe.set('x', 150);
    unRe.set('x', 50);
    expect(unRe.get('x')).toBe(50);
    expect(unRe.get('y')).toBe(100);
    unRe.undo();
    expect(unRe.get('x')).toBe(150);
    expect(unRe.get('y')).toBe(100);
    unRe.redo();
    expect(unRe.get('x')).toBe(50);
    expect(unRe.get('y')).toBe(100);
    unRe.undo();
    unRe.undo();
    expect(unRe.get('x')).toBe(1);
    expect(unRe.get('y')).toBe(100);
    unRe.undo();
    unRe.undo();
    expect(unRe.get('x')).toBe(1);
    expect(unRe.get('y')).toBe(2);
    try {
      unRe.undo();
      expect(false).toBeTruthy();
    } catch (e) {
      expect(unRe.get('x')).toBe(1);
      expect(unRe.get('y')).toBe(2);
    }
    unRe.redo();
    unRe.redo();
    unRe.redo();
    unRe.redo();
    expect(unRe.get('x')).toBe(50);
    expect(unRe.get('y')).toBe(100);
    try {
      unRe.redo();
    } catch (e) {
      expect(unRe.get('x')).toBe(50);
      expect(unRe.get('y')).toBe(100);
    }
  });

  it('should new key works', function () {
    const obj = {
      x: 1,
      y: 2,
    };

    const unRe = undoRedo(obj);
    unRe.set('z', 10);
    expect(unRe.get('z')).toBe(10);
    unRe.undo();
    expect(unRe.get('z')).toBe(undefined);
    unRe.redo();
    expect(unRe.get('z')).toBe(10);
  });

  it('should delete works', function () {
    const obj = {
      x: 1,
      y: 2,
    };

    const unRe = undoRedo(obj);
    unRe.del('x');
    expect(unRe.get('x')).toBe(undefined);
    expect(unRe.get('z')).toBe(undefined);
    expect(obj.hasOwnProperty('x')).toBeFalsy();
    unRe.undo();
    expect(unRe.get('x')).toBe(1);
    unRe.redo();
    expect(unRe.get('x')).toBe(undefined);
    expect(obj.hasOwnProperty('x')).toBeFalsy();
  });
});
