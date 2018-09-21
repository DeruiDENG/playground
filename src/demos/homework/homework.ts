import {promptInput, parseDimensionInput} from "./inputHandlers";
import Maze from "./Maze";

const main = async () => {
    const dimensionInput = await promptInput('Please input the dimension(x,y): ');
    const dimension = parseDimensionInput(dimensionInput);
    if (dimension === false) {
        console.log('Dimension is invalid');
        return;
    }

    console.log(`Dimension: ${dimension.dimX},${dimension.dimY}`);
    const maze = new Maze(dimension.dimX, dimension.dimY);
    maze.print();
};

main();
