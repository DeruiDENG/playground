/**
 * Path Finder #1: can you reach the exit?
 * https://www.codewars.com/kata/5765870e190b1472ec0022a2
 */

type Point = { isPath: boolean, touched: boolean, row: number, column: number }
type Maze = {
  points: Point[],
  priority: Point[],
  readonly size: number,
};

export function pathFinder(maze: string): boolean {
  const parsedMaze = parseMaze(maze);
  return isReachable(
    parsedMaze,
    { row: 0, column: 0 },
    { row: parsedMaze.size - 1, column: parsedMaze.size - 1 });
}

function isReachable(
  maze: Maze,
  start: { row: number, column: number },
  end: { row: number, column: number }): boolean {
  const startPoint = getPoint(maze, start.row, start.column);
  const { priority } = maze;
  startPoint.touched = true;
  priority.push(startPoint);
  while (true) {
    const points = findAllAdjacentConnectedPoints(maze);
    if (points.length === 0) {
      return false;
    } else if (points.some(point => point.column === end.column && point.row === end.row)) {
      return true;
    }
    labelPointsAsReached(maze, points);
  }
}

function findAllAdjacentConnectedPoints(maze: Maze): Point[] {
  const result: Point[] = [];
  for (const priorityPoint of maze.priority) {
    const adjacentPoints = findAdjacentConnectedPoints(maze, priorityPoint);
    for (const adjacentPoint of adjacentPoints) {
      if (!result.find(
        point => point.row === adjacentPoint.row && point.column === adjacentPoint.column)) {
        result.push(adjacentPoint);
      }
    }
  }
  return result;
}

function labelPointsAsReached(maze: Maze, points: Point[]) {
  points.forEach(point => point.touched = true);
  maze.priority = points;
}

function findAdjacentConnectedPoints(area: Maze, point: Point): Point[] {
  const { column, row } = point;
  const adjacentPointsPos = [[row, column - 1], [row, column + 1], [row - 1, column], [row + 1, column]];
  return adjacentPointsPos.map(([row, column]) => getPoint(area, row, column))
    .filter(point => !!point && point.touched === false && point.isPath === true);
}

function getPoint(maze: Maze, row: number, column: number) {
  if (row < 0 || row >= maze.size || column < 0 || column >= maze.size) {
    return null;
  }

  const { points, size } = maze;
  return points[row * size + column];
}

function parseMaze(area: string): Maze {
  const rows = area.split('\n');
  const result = rows.map((row, rowIndex) =>
    row.split('')
      .map((ele, columnIndex) => ({
        isPath: ele === '.',
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
