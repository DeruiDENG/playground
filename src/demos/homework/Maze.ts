export type Dimension = {
  x: number, y: number,
};

enum BlockType {
  Wall, Street,
}

type RobotCommand = {
  direction: 'W' | 'A' | 'S' | 'D',
  repeatCount: number,
};

export interface ConnectivityInfo {
  start: Dimension;
  end: Dimension;
}

class Maze {
  private readonly dimension: Dimension;
  private readonly blocks: BlockType[][];
  private robotPosition: Dimension | null;

  constructor(dimX: number, dimY: number) {
    this.blocks = Maze.initializeBlock(dimX, dimY);
    this.dimension = {
      x: dimX, y: dimY,
    };
    this.robotPosition = null;
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

  public putRobot(dimension: Dimension): boolean {
    if (dimension.x < 0 || dimension.y < 0 || dimension.x >= this.dimension.x ||
      dimension.y >= this.dimension.y) {
      return false;
    }

    const dimX = dimension.x * 2 + 1;
    const dimY = dimension.y * 2 + 1;
    if (this.blocks[dimY][dimX] !== BlockType.Street) {
      return false;
    }

    this.robotPosition = {
      x: dimX,
      y: dimY,
    };

    return true;
  }

  public moveRobot(robotCommand: RobotCommand): boolean {
    if (!this.isRobotInitialized()) {
      return false;
    }

    const { direction } = robotCommand;
    for (let i = 0; i < robotCommand.repeatCount; i++) {
      this.moveRobotByOneStep(direction);
    }

    return true;
  }

  public print() {
    console.log('####Maze####');
    for (const [indexY, blockRow] of Array.from(this.blocks.entries())) {
      let output = '';
      for (const [indexX, blockItem] of Array.from(blockRow.entries())) {
        if (this.robotPosition && this.robotPosition.x === indexX && this.robotPosition.y ===
          indexY) {
          output += '[*]';
        } else {
          output += (blockItem === BlockType.Wall ? '[W]' : '[R]');
        }
        output += ' ';
      }

      console.log(output);
    }
  }

  private isRobotInitialized(): boolean {
    return Boolean(this.robotPosition);
  }

  private moveRobotByOneStep(direction: 'W' | 'A' | 'S' | 'D') {
    if (!this.robotPosition) {
      return;
    }

    let { x: robotPositionX, y: robotPositionY } = this.robotPosition;
    switch (direction) {
      case 'W': {
        robotPositionY -= 1;
        break;
      }
      case 'A': {
        robotPositionX -= 1;
        break;
      }
      case 'S': {
        robotPositionY += 1;
        break;
      }
      case 'D': {
        robotPositionX += 1;
        break;
      }
    }

    if (this.blocks[robotPositionY][robotPositionX] === BlockType.Street) {
      this.updateRobotPosition({ x: robotPositionX, y: robotPositionY });
    }
  }

  private canConnect(connectivityInfoItem: ConnectivityInfo): boolean {
    const startX = connectivityInfoItem.start.x;
    const endX = connectivityInfoItem.end.x;
    const startY = connectivityInfoItem.start.y;
    const endY = connectivityInfoItem.end.y;
    const isStartEndConnected = Math.abs(startX - endX) + Math.abs(startY - endY) === 1;
    const isWithinRange = [startX, endX].every(
      x => x >= 0 && x < this.dimension.x) && [startY, endY].every(
      y => y >= 0 && y < this.dimension.y);

    return isStartEndConnected && isWithinRange;
  }

  private updateRobotPosition(position: Dimension) {
    this.robotPosition = { x: position.x, y: position.y };
  }
}

export default Maze;
