/**
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid) {
  const COLUMN = grid[0].length;
  const ROW = grid.length;
  const resultGrid = grid.map(row => row.map(() => 0));
  const pointsToProcess = [{ xIndex: 0, yIndex: 0 }];
  while (pointsToProcess.length) {
    const point = pointsToProcess.pop();
    if (resultGrid[point.yIndex][point.xIndex] === 0) {
      const pointValue = grid[point.yIndex][point.xIndex];
      const leftPoint =
        point.xIndex > 0 ? resultGrid[point.yIndex][point.xIndex - 1] : null;
      const upPoint =
        point.yIndex > 0 ? resultGrid[point.yIndex - 1][point.xIndex] : null;

      const adjacentPoints = [leftPoint, upPoint].filter(
        point => point !== null
      );

      resultGrid[point.yIndex][point.xIndex] = adjacentPoints.length
        ? pointValue + Math.min(...adjacentPoints)
        : pointValue;

      if (point.xIndex < COLUMN - 1) {
        pointsToProcess.unshift({
          xIndex: point.xIndex + 1,
          yIndex: point.yIndex,
        });
      }

      if (point.yIndex < ROW - 1) {
        pointsToProcess.unshift({
          xIndex: point.xIndex,
          yIndex: point.yIndex + 1,
        });
      }
    }
  }

  return resultGrid[ROW - 1][COLUMN - 1];
}

export { minPathSum };
