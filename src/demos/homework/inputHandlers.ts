import * as readline from 'readline';
import { ConnectivityInfo, Dimension } from './Maze';

interface RobotCommand {
  direction: 'W' | 'A' | 'S' | 'D';
  repeatCount: number;
}

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

const parseRobotPosition = (posInput: string): Dimension | false => {
  const splitInput = posInput.split(',');
  if (splitInput.length !== 2) {
    return false;
  }

  const dimY = Number.parseInt(splitInput[0], 10);
  const dimX = Number.parseInt(splitInput[1], 10);
  if (!(Number.isInteger(dimX) && Number.isInteger(dimY))) {
    return false;
  }

  return {
    x: dimX,
    y: dimY,
  };
};

const isDirectionValid =
  (direction: string): direction is 'W' | 'A' | 'S' | 'D' =>
    (direction === 'W' || direction === 'A' || direction === 'S' || direction === 'D');

const parseCount = (count: string): number | false => {
  const parsedCount = Number.parseInt(count, 10);
  if (Number.isInteger(parsedCount) && parsedCount >= 0) {
    return parsedCount;
  }

  return false;
};

const parseRobotCommands = (commandInput: string): RobotCommand[] | false => {
  if (commandInput.length % 2 === 1) {
    return false;
  }

  const commands: RobotCommand[] = [];

  for (let i = 0; i < commandInput.length; i = i + 2) {
    const direction = commandInput[i];
    const count = commandInput[i + 1];
    const parsedCount = parseCount(count);
    if (isDirectionValid(direction) && parsedCount !== false) {
      commands.push({ direction, repeatCount: parsedCount });
    } else {
      return false;
    }

  }

  return commands;
};

export const parseRobotInput =
  (robotInput: string): { dimension: Dimension, commands: RobotCommand[] } | false => {
    const posAndCommand = robotInput.split(' ');
    if (posAndCommand.length !== 2) {
      return false;
    }

    const robotPosition = parseRobotPosition(posAndCommand[0]);
    if (robotPosition === false) {
      return false;
    }

    const robotCommands = parseRobotCommands(posAndCommand[1]);
    if (robotCommands === false) {
      return false;
    }

    return {
      dimension: robotPosition,
      commands: robotCommands,
    };
  };
