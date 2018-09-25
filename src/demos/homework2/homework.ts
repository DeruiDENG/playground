import { promptInput } from './inputHandlers';
import { formatText } from './textFormatter';

const main = async () => {
  const inputText = await promptInput('Input the text:');
  const inputLength = await promptInput('Input the number of char in a line:');

  const lineLength = Number.parseInt(inputLength, 10);
  if (!Number.isInteger(lineLength) || lineLength <= 0 || inputText.length === 0) {
    console.log('Your input is invalid.');
    return;
  }

  const result = formatText(inputText, lineLength);
  console.log('Result is:');
  console.log(result);
};

main();
