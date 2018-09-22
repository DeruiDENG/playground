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
  const splitInput = dimensionInput.split(',');
  if (splitInput.length !== 2) {
    return false;
  }

  const dimY = Number(splitInput[0]);
  const dimX = Number(splitInput[1]);
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
      x => !Number.isInteger(Number(x))) || endDims.some(x => !Number.isInteger(Number(x)))) {
      return false;
    }

    const start = {
      y: Number(startDims[0]),
      x: Number(startDims[1]),
    };

    const end = {
      y: Number(endDims[0]),
      x: Number(endDims[1]),
    };

    result.push({ start, end });
  }

  return result;
};
