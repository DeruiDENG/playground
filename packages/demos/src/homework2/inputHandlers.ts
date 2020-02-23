import * as readline from 'readline';

export const promptInput = (promptMessage: string) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise<string>(resolve => {
    rl.question(promptMessage, answer => {
      rl.close();
      resolve(answer);
    });
  });
};
