// @ts-check

/**
 * @typedef Point
 * @prop {number} row
 * @prop {number} column
 */

const GATE = 0;
const EMPTY_ROOM = 2147483647;

/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
  const ROW = rooms.length;
  if (ROW === 0) {
    return;
  }

  const COLUMN = rooms[0].length;
  const points = findEntryGates(rooms);
  while (points.length) {
    const { row, column } = points.shift();
    const val = rooms[row][column];
    if (row - 1 >= 0 && rooms[row - 1][column] === EMPTY_ROOM) {
      rooms[row - 1][column] = val + 1;
      points.push({ row: row - 1, column });
    }
    if (row + 1 < ROW && rooms[row + 1][column] === EMPTY_ROOM) {
      rooms[row + 1][column] = val + 1;
      points.push({ row: row + 1, column });
    }

    if (column - 1 >= 0 && rooms[row][column - 1] === EMPTY_ROOM) {
      rooms[row][column - 1] = val + 1;
      points.push({ row, column: column - 1 });
    }

    if (column + 1 < COLUMN && rooms[row][column + 1] === EMPTY_ROOM) {
      rooms[row][column + 1] = val + 1;
      points.push({ row, column: column + 1 });
    }
  }
};

/**
 * @param {number[][]} rooms
 * @return {Point[]}
 */
function findEntryGates(rooms) {
  /**
   * @type {Point[]}
   */
  const results = [];
  const ROW = rooms.length;
  const COLUMN = rooms[0].length;
  for (let rowIndex = 0; rowIndex < ROW; rowIndex++) {
    for (let columnIndex = 0; columnIndex < COLUMN; columnIndex++) {
      if (rooms[rowIndex][columnIndex] === GATE) {
        results.push({
          row: rowIndex,
          column: columnIndex,
        });
      }
    }
  }

  return results;
}

export { wallsAndGates };
