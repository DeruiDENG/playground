import * as readline from "readline";

interface DimensionInput {
    dimX: number,
    dimY: number,
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const promptInput = (promptMessage: string) => {
    return new Promise<string>(
        resolve => {
            rl.question(promptMessage, answer => {
                resolve(answer);
                rl.close();
            });
        }
    )
};

export const parseDimensionInput = (dimensionInput: string): DimensionInput | false => {
    const splitInput = dimensionInput.split(',');
    if (splitInput.length !== 2) {
        return false;
    }

    const dimY = Number(splitInput[0]);
    const dimX = Number(splitInput[1]);
    if (dimX > 0 && dimY > 0) {
        return {
            dimX,
            dimY,
        }
    }

    return false;
};
