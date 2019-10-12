/**
 * Path Finder #3: the Alpinist
 * https://www.codewars.com/kata/path-finder-number-3-the-alpinist
 */

interface Point { isPath: boolean, distance: number, confirmed: boolean, touched: boolean, row: number, column: number }
interface Maze {
  points: Point[],
  priority: Point[],
  readonly size: number,
}

export function pathFinder(maze: string): number | false {
  const parsedMaze = parseMaze(maze);
  return findShortestPath(
    parsedMaze,
    { row: 0, column: 0 },
    { row: parsedMaze.size - 1, column: parsedMaze.size - 1 });
}

function findShortestPath(
  maze: Maze,
  start: { row: number, column: number },
  end: { row: number, column: number }): number | false {
  const startPoint = getPoint(maze, start.row, start.column);
  const { priority } = maze;
  startPoint.distance = 0;
  priority.push(startPoint);
  while (getPoint(maze, end.row, end.column).confirmed !== true) {
    const point = findNextUnconfirmedPoint(maze);
    if (!point) {
      return false;
    }
    labelAllAdjacentPoints(maze, point);
    maze.priority = maze.priority.filter(
      pPoint => pPoint.column !== point.column || pPoint.row !== point.row);
    point.confirmed = true;
  }

  return getPoint(maze, end.row, end.column).distance;
}

function findNextUnconfirmedPoint(maze: Maze): Point {
  let smallestDistance = Number.MAX_SAFE_INTEGER;
  let smallestPoint: Point = null;
  maze.priority.filter(point => point.confirmed === false).forEach(point => {
    if (point.distance < smallestDistance) {
      smallestDistance = point.distance;
      smallestPoint = point;
    }
  });

  return smallestPoint;
}

function labelAllAdjacentPoints(maze: Maze, point: Point) {
  const { column, row } = point;
  const adjacentPointsPos = [[row, column - 1], [row, column + 1], [row - 1, column], [row + 1, column]];
  const adjacentPoints = adjacentPointsPos.map(([row, column]) => getPoint(maze, row, column))
    .filter(point => !!point && point.confirmed === false && point.isPath === true);
  adjacentPoints.forEach(adjacentPoint => {
    const calculatedDistance = 1 + point.distance;
    adjacentPoint.distance = Math.min(adjacentPoint.distance, calculatedDistance);
    if (adjacentPoint.touched === false) {
      maze.priority.push(adjacentPoint);
      adjacentPoint.touched = true;
    }
  });
}

function getPoint(maze: Maze, row: number, column: number) {
  if (row < 0 || row >= maze.size || column < 0 || column >= maze.size) {
    return null;
  }

  const { points, size } = maze;
  return points[row * size + column];
}

function parseMaze(maze: string): Maze {
  const rows = maze.split('\n');
  const result = rows.map((row, rowIndex) =>
    row.split('')
      .map((ele, columnIndex) => ({
        isPath: ele === '.',
        distance: Number.MAX_SAFE_INTEGER,
        confirmed: false,
        column: columnIndex,
        row: rowIndex,
        touched: false,
      })));
  return {
    points: result.reduce((acc, row) => [...acc, ...row], []),
    size: result.length,
    priority: [],
  };
}
