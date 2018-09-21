import {promptInput, parseDimensionInput, parseConnectivityInput} from "./inputHandlers";
import Maze from "./Maze";

const main = async () => {
    const dimensionInput = await promptInput('Please input the dimension(x,y): ');
    const dimension = parseDimensionInput(dimensionInput);
    if (dimension === false) {
        console.log('Dimension is invalid');
        return;
    }

    const maze = new Maze(dimension.dimX, dimension.dimY);
    maze.print();

    const connectivityInput = await promptInput('Please input the connectivity(0,1 0,2;1,1 1,2): ');
    const connectivity = parseConnectivityInput(connectivityInput);
    if (connectivity === false) {
        console.log('Connectivity is invalid');
        return;
    }

    console.log(connectivity);
};

main();
