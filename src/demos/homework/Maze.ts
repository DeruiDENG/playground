export type Dimension = {
  x: number,
  y: number,
};

enum BlockType {
  Wall,
  Street,
}

export interface ConnectivityInfo {
  start: Dimension;
  end: Dimension;
}

class Maze {
  private readonly dimension: Dimension;
  private readonly blocks: BlockType[][];

  constructor(dimX: number, dimY: number) {
    this.blocks = Maze.initializeBlock(dimX, dimY);
    this.dimension = {
      x: dimX,
      y: dimY,
    };
  }

  private static initializeBlock(dimX: number, dimY: number) {
    const blockDimX = dimX * 2 + 1;
    const blockDimY = dimY * 2 + 1;
    const blocks: BlockType[][] = [];
    for (let yIndex = 0; yIndex < blockDimY; yIndex++) {
      const blockRow: BlockType[] = [];
      for (let xIndex = 0; xIndex < blockDimX; xIndex++) {
        if (xIndex % 2 === 1 && yIndex % 2 === 1) {
          blockRow.push(BlockType.Street);
        } else {
          blockRow.push(BlockType.Wall);
        }
      }
      blocks.push(blockRow);
    }

    return blocks;
  }

  public addConnectivityInfo(connectivityInfoItems: ConnectivityInfo[]): boolean {
    for (const connectivityInfoItem of connectivityInfoItems) {
      if (this.canConnect(connectivityInfoItem)) {
        const dimensionToUpdateX = connectivityInfoItem.start.x + connectivityInfoItem.end.x + 1;
        const dimensionToUpdateY = connectivityInfoItem.start.y + connectivityInfoItem.end.y + 1;
        this.blocks[dimensionToUpdateY][dimensionToUpdateX] = BlockType.Street;
      } else {
        return false;
      }
    }

    return true;
  }

  public putRobit(dimension: Dimension) {

  }

  public print() {
    console.log('####Maze####');
    for (const blockRow of this.blocks) {
      let output = '';
      for (const blockItem of blockRow) {
        output += (blockItem === BlockType.Wall ? '[W]' : '[S]');
        output += ' ';
      }

      console.log(output);
    }
  }

  private canConnect(connectivityInfoItem: ConnectivityInfo): boolean {
    const startX = connectivityInfoItem.start.x;
    const endX = connectivityInfoItem.end.x;
    const startY = connectivityInfoItem.start.y;
    const endY = connectivityInfoItem.end.y;
    const isStartEndConnected =
      Math.abs(startX - endX) +
      Math.abs(startY - endY) === 1;
    const isWithinRange = [startX, endX].every(x => x >= 0 && x < this.dimension.x) &&
      [startY, endY].every(y => y >= 0 && y < this.dimension.y);

    return isStartEndConnected && isWithinRange;
  }
}

export default Maze;
