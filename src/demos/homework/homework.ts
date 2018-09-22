import { promptInput, parseDimensionInput, parseConnectivityInput } from './inputHandlers';
import Maze from './Maze';

const main = async () => {
  const dimensionInput = await promptInput('Please input the dimension(x,y): ');
  const dimension = parseDimensionInput(dimensionInput);
  if (dimension === false) {
    console.log('Dimension is invalid');
    return;
  }

  const maze = new Maze(dimension.x, dimension.y);
  maze.print();

  const connectivityInput = await promptInput('Please input the connectivity(0,1 0,2;1,1 1,2): ');
  const connectivity = parseConnectivityInput(connectivityInput);
  if (connectivity === false) {
    console.log('Connectivity is invalid');
    return;
  }

  const isAddConnectivitySuccess = maze.addConnectivityInfo(connectivity);
  if (!isAddConnectivitySuccess) {
    console.log('Connectivity format does not fit into maze');
    return;
  }

  maze.print();
};

main();
