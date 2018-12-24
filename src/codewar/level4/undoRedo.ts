/**
 * Undo/Redo
 * https://www.codewars.com/kata/undo-slash-redo/train/javascript
 */

export function undoRedo(object) {
  let lastChanges: { key: string, oldValue: any }[] = [];
  let lastUndos: { key: string, oldValue: any }[] = [];

  function del(key, reversible = true, preserveUndos = false) {
    if (reversible) {
      lastChanges.push({ key, oldValue: object[key] });
    }
    if (!preserveUndos) {
      lastUndos = [];
    }
    delete object[key];
  }

  function get(key) {
    return object[key];
  }

  function set(key, value, reversible = true, preserveUndos = false) {
    const oldValue = object[key];
    object[key] = value;
    if (reversible) {
      lastChanges.push({ key, oldValue });
    }
    if (!preserveUndos) {
      lastUndos = [];
    }
  }

  function undo() {
    if (lastChanges.length) {
      const lastChange = lastChanges.pop();
      lastUndos.push({ key: lastChange.key, oldValue: object[lastChange.key] });
      if (lastChange.oldValue === undefined) {
        del(lastChange.key, false, true);
      } else {
        set(lastChange.key, lastChange.oldValue, false, true);
      }
    } else {
      throw new Error('Nothing to undo.');
    }
  }

  function redo() {
    if (lastUndos.length) {
      const lastUndo = lastUndos.pop();
      if (lastUndo.oldValue === undefined) {
        del(lastUndo.key, true, true);
      } else {
        set(lastUndo.key, lastUndo.oldValue, true, true);
      }
    } else {
      throw new Error('Nothing to redo.');
    }
  }

  return {
    set,
    get,
    del,
    undo,
    redo,
  };
}
