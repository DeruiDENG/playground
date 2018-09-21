type Dimension = {
    x: number,
    y: number,
};

enum BlockType {
    Wall,
    Street,
}

class Maze {
    private dimension: Dimension;
    private blocks: BlockType[][];

    constructor(dimX: number, dimY: number) {
        this.blocks = Maze.initializeBlock(dimX, dimY);
        this.dimension = {
            x: dimX,
            y: dimY,
        }
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
                    blockRow.push(BlockType.Wall)
                }
            }
            blocks.push(blockRow);
        }

        return blocks;
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
}

export default Maze;
