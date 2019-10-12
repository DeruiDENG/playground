/**
 * Path Finder #3: the Alpinist
 * https://www.codewars.com/kata/path-finder-number-3-the-alpinist
 */

interface Point { altitude: number, distance: number, confirmed: boolean, touched: boolean, row: number, column: number }
interface Area {
  points: Point[],
  priority: Point[],
  readonly size: number,
}

export function pathFinder(area: string): number {
  const parsedArea = parseArea(area);
  return findShortestPath(
    parsedArea,
    { row: 0, column: 0 },
    { row: parsedArea.size - 1, column: parsedArea.size - 1 });
}

function findShortestPath(
  area: Area,
  start: { row: number, column: number },
  end: { row: number, column: number }): number {
  const startPoint = getPoint(area, start.row, start.column);
  const { priority } = area;
  startPoint.distance = 0;
  priority.push(startPoint);
  while (getPoint(area, end.row, end.column).confirmed !== true) {
    const point = findNextUnconfirmedPoint(area);
    labelAllAdjacentPoints(area, point);
    area.priority = area.priority.filter(
      pPoint => pPoint.column !== point.column || pPoint.row !== point.row);
    point.confirmed = true;
  }

  return getPoint(area, end.row, end.column).distance;
}

function findNextUnconfirmedPoint(area: Area): Point {
  let smallestDistance = Number.MAX_SAFE_INTEGER;
  let smallestPoint: Point = null;
  area.priority.filter(point => point.confirmed === false).forEach(point => {
    if (point.distance < smallestDistance) {
      smallestDistance = point.distance;
      smallestPoint = point;
    }
  });

  return smallestPoint;
}

function labelAllAdjacentPoints(area: Area, point: Point) {
  const { column, row } = point;
  const adjacentPointsPos = [[row, column - 1], [row, column + 1], [row - 1, column], [row + 1, column]];
  const adjacentPoints = adjacentPointsPos.map(([row, column]) => getPoint(area, row, column))
    .filter(point => !!point && point.confirmed === false);
  adjacentPoints.forEach(adjacentPoint => {
    const distanceFromCurrentPoint = Math.abs(point.altitude - adjacentPoint.altitude);
    const calculatedDistance = distanceFromCurrentPoint + point.distance;
    adjacentPoint.distance = Math.min(adjacentPoint.distance, calculatedDistance);
    if (adjacentPoint.touched === false) {
      area.priority.push(adjacentPoint);
      adjacentPoint.touched = true;
    }
  });
}

function getPoint(area: Area, row: number, column: number) {
  if (row < 0 || row >= area.size || column < 0 || column >= area.size) {
    return null;
  }

  const { points, size } = area;
  return points[row * size + column];
}

function parseArea(area: string): Area {
  const rows = area.split('\n');
  const result = rows.map((row, rowIndex) =>
    row.split('')
      .map((altitude, columnIndex) => ({
        altitude: parseInt(altitude, 10),
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
