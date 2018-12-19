type Point = { altitude: number, distance: number }
type Area = Point[][];

export function pathFinder(area: string): number {
  const parsedArea = parseArea(area);
  const dimension = parsedArea.length;
  for (let i = 0; i < dimension * 2 - 2; i++) {
    if (i < dimension - 1) {
      let row = 0;
      let column = i + 1;
      while (column >= 0) {
        parsedArea[row][column].distance = findDistance(parsedArea, column, row);
        column--;
        row++;
      }
    } else {
      let column = dimension - 1;
      let row = i - dimension + 2;
      while (row <= dimension - 1) {
        parsedArea[row][column].distance = findDistance(parsedArea, column, row);
        column--;
        row++;
      }
    }
  }
  return parsedArea[dimension - 1][dimension - 1].distance;
}

function findDistance(area: Area, column: number, row: number) {
  const currentPoint = area[row][column];
  const pointsToCheck: Point[] = [];
  if (row !== 0) {
    pointsToCheck.push(area[row - 1][column]);
  }
  if (column !== 0) {
    pointsToCheck.push(area[row][column - 1]);
  }

  return Math.min(
    ...pointsToCheck.map(
      pointToCheck =>
        pointToCheck.distance + Math.abs(pointToCheck.altitude - currentPoint.altitude)));
}

function parseArea(area: string): Area {
  const rows = area.split('\n');
  const parsedArea = rows.map(row =>
    row.split('')
      .map(altitude => ({ altitude: parseInt(altitude, 10), distance: null })));
  parsedArea[0][0].distance = 0;
  return parsedArea;
}
