import { promptInput } from './inputHandlers';
import { formatText } from './textFormatter';

const isLineLengthInvalid = (lineLength: number) => {
  const lengthRange = {
    min: 10,
    max: 80,
  };

  return (
    !Number.isInteger(lineLength) ||
    lineLength <= lengthRange.min ||
    lineLength > lengthRange.max
  );
};

const main = async () => {
  const inputText = await promptInput('Input the text:');
  const inputLength = await promptInput('Input the number of char in a line:');

  const lineLength = Number.parseInt(inputLength, 10);
  if (isLineLengthInvalid(lineLength)) {
    console.log('Your input line length is invalid.');
    return;
  }

  const result = formatText(inputText, lineLength);
  console.log('Result is:');
  console.log(result);
};

main();
