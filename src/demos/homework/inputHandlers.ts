import * as readline from 'readline';
import { ConnectivityInfo, Dimension } from './Maze';

export const promptInput = (promptMessage: string) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise<string>(
    (resolve) => {
      rl.question(promptMessage, (answer) => {
        rl.close();
        resolve(answer);
      });
    },
  );
};

export const parseDimensionInput = (dimensionInput: string): Dimension | false => {
  const splitInput = dimensionInput.split(' ');
  if (splitInput.length !== 2) {
    return false;
  }

  const dimY = Number.parseInt(splitInput[0], 10);
  const dimX = Number.parseInt(splitInput[1], 10);
  if (dimX > 0 && dimY > 0) {
    return {
      x: dimX,
      y: dimY,
    };
  }

  return false;
};

export const parseConnectivityInput = (connectivityInput: string): false | ConnectivityInfo[] => {
  const connectivityItems = connectivityInput.split(';');
  if (connectivityItems.length === 0) {
    return false;
  }

  const result: ConnectivityInfo[] = [];
  for (const connectivityItem of connectivityItems) {
    const startAndEnd = connectivityItem.split(' ');
    if (startAndEnd.length !== 2) {
      return false;
    }
    const startDims = startAndEnd[0].split(',');
    const endDims = startAndEnd[1].split(',');
    if (startDims.length !== 2 || endDims.length !== 2 || startDims.some(
      x => !Number.isInteger(Number.parseInt(x, 10))) ||
      endDims.some(x => !Number.isInteger(Number.parseInt(x, 10)))) {
      return false;
    }

    const start = {
      y: Number.parseInt(startDims[0], 10),
      x: Number.parseInt(startDims[1], 10),
    };

    const end = {
      y: Number.parseInt(endDims[0], 10),
      x: Number.parseInt(endDims[1], 10),
    };

    result.push({ start, end });
  }

  return result;
};

export const parseRobotInput = (robotInput: string): Dimension | false => {
  const splitInput = robotInput.split(',');
  if (splitInput.length !== 2) {
    return false;
  }

  const dimY = Number.parseInt(splitInput[0], 10);
  const dimX = Number.parseInt(splitInput[1], 10);
  if (Number.isInteger(dimY) && Number.isInteger(dimX)) {
    return {
      x: dimX,
      y: dimY,
    };
  }

  return false;
};
