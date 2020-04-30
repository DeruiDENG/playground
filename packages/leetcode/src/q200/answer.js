// @ts-check

const LAND = '1';
const MARKED = '2';

/**
 * @typedef Point
 * @prop {number} column
 * @prop {number} row
 */

/**
 * @param {string[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid.length === 0) {
    return 0;
  }

  let point = getNextLandPoint(grid);
  let count = 0;
  while (point) {
    count++;
    markWholeIsland(point, grid);
    point = getNextLandPoint(grid);
  }

  return count;
};

/**
 *
 * Perform a BFS to mark the whole island
 * @param {Point} point
 * @param {string[][]} grid
 */
function markWholeIsland(point, grid) {
  const ROW = grid.length;
  const COLUMN = grid[0].length;
  const points = [point];
  grid[point.row][point.column] = MARKED;
  while (points.length) {
    const { column, row } = points.shift();
    if (column - 1 >= 0 && grid[row][column - 1] === LAND) {
      points.push({ column: column - 1, row });
      grid[row][column - 1] = MARKED;
    }

    if (column + 1 < COLUMN && grid[row][column + 1] === LAND) {
      points.push({ column: column + 1, row });
      grid[row][column + 1] = MARKED;
    }

    if (row - 1 >= 0 && grid[row - 1][column] === LAND) {
      points.push({ column, row: row - 1 });
      grid[row - 1][column] = MARKED;
    }

    if (row + 1 < ROW && grid[row + 1][column] === LAND) {
      points.push({ column, row: row + 1 });
      grid[row + 1][column] = MARKED;
    }
  }
}

/**
 * @param {string[][]} grid
 * @return {Point|null}
 */
function getNextLandPoint(grid) {
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (grid[row][column] === LAND) {
        return { row, column };
      }
    }
  }

  return null;
}

export { numIslands };
