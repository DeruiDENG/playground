import {
  promptInput,
  parseDimensionInput,
  parseConnectivityInput,
  parseRobotInput,
} from './inputHandlers';
import Maze from './Maze';

export const main = async () => {
  const dimensionInput = await promptInput('Please input the dimension(3 3): ');
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

  const robotInput = await promptInput('Please input robot info:(0,1 D1S2)');
  const robotInfo = parseRobotInput(robotInput);
  if (robotInfo === false) {
    console.log('Failed to parse robot input.');
    return;
  }

  const isPutRobotSuccess = maze.putRobot(robotInfo.dimension);
  if (!isPutRobotSuccess) {
    console.log('The position of robot to the maze is incorrect.');
    return;
  }

  for (const robotCommand of robotInfo.commands) {
    const isProcessRobotMoveSuccess = maze.moveRobot({
      direction: robotCommand.direction,
      repeatCount: robotCommand.repeatCount,
    });

    if (!isProcessRobotMoveSuccess) {
      console.log('Robot command format error(should be in format D1S2W3)');
      return;
    }
  }

  maze.print();
};
