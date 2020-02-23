/**
 * Shortest Knight Path
 * https://www.codewars.com/kata/shortest-knight-path/train/javascript
 */

interface Point {
  distance: number;
  confirmed: boolean;
  touched: boolean;
  row: number;
  column: number;
}
interface Chess {
  points: Point[];
  readonly size: number;
}

export function knight(start: string, finish: string): number {
  const chess = parseChess();
  const [startRow, startColumn] = parseCoordinate(start);
  const [endRow, endColumn] = parseCoordinate(finish);
  return findShortestPath(
    chess,
    { row: startRow, column: startColumn },
    { row: endRow, column: endColumn }
  );
}

function findShortestPath(
  chess: Chess,
  start: { row: number; column: number },
  end: { row: number; column: number }
): number {
  const startPoint = getPoint(chess, start.row, start.column);
  startPoint.distance = 0;
  while (getPoint(chess, end.row, end.column).confirmed !== true) {
    const point = findNextUnconfirmedPoint(chess);
    labelAllAdjacentPoints(chess, point);
    point.confirmed = true;
  }

  return getPoint(chess, end.row, end.column).distance;
}

function labelAllAdjacentPoints(maze: Chess, point: Point) {
  const { column, row } = point;
  const adjacentPointsPos = [
    [row - 2, column - 1],
    [row - 2, column + 1],
    [row - 1, column - 2],
    [row - 1, column + 2],
    [row + 1, column - 2],
    [row + 1, column + 2],
    [row + 2, column - 1],
    [row + 2, column + 1],
  ];
  const adjacentPoints = adjacentPointsPos
    .map(([row, column]) => getPoint(maze, row, column))
    .filter(point => !!point && point.confirmed === false);
  adjacentPoints.forEach(adjacentPoint => {
    const calculatedDistance = 1 + point.distance;
    adjacentPoint.distance = Math.min(
      adjacentPoint.distance,
      calculatedDistance
    );
    if (adjacentPoint.touched === false) {
      adjacentPoint.touched = true;
    }
  });
}

function findNextUnconfirmedPoint(maze: Chess): Point {
  let smallestDistance = Number.MAX_SAFE_INTEGER;
  let smallestPoint: Point = null;
  maze.points
    .filter(point => point.confirmed === false)
    .forEach(point => {
      if (point.distance < smallestDistance) {
        smallestDistance = point.distance;
        smallestPoint = point;
      }
    });

  return smallestPoint;
}

function getPoint(maze: Chess, row: number, column: number) {
  if (row < 0 || row >= maze.size || column < 0 || column >= maze.size) {
    return null;
  }

  const { points, size } = maze;
  return points[row * size + column];
}

function parseChess(): Chess {
  const size = 8;
  const points: Point[] = [];

  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      points.push({
        distance: Number.MAX_SAFE_INTEGER,
        confirmed: false,
        touched: false,
        row,
        column,
      });
    }
  }

  return {
    points,
    size,
  };
}

function parseCoordinate(posString: string): [number, number] {
  const [rawColumn, rawRow] = posString.split('');
  const columnIndex = rawColumn.charCodeAt(0) - 'a'.charCodeAt(0);
  const rowIndex = parseInt(rawRow, 10) - 1;
  return [rowIndex, columnIndex];
}
