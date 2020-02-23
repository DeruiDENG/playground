interface WordWithFormat {
  word: string;
  lineNumbers: number[];
}

const parseSegments = (text: string): string[] => {
  const rawSegments = text.split(' ');
  const resultSegments: string[] = [];
  let spaceCounter = 0;

  for (const rawSegment of rawSegments) {
    if (rawSegment !== '') {
      if (spaceCounter !== 0) {
        resultSegments.push(' '.repeat(spaceCounter));
        spaceCounter = 0;
      }

      resultSegments.push(rawSegment);
    }

    spaceCounter += 1;
  }

  if (spaceCounter > 1) {
    resultSegments.push(' '.repeat(spaceCounter - 1));
  }

  return resultSegments;
};

const range = (start: number, end: number): number[] => {
  const result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
};

const analysisText = (text: string, lineLength: number): WordWithFormat[] => {
  const segments = parseSegments(text);
  const result: WordWithFormat[] = [];

  let charIndex = 0;
  for (const segment of segments) {
    const segmentLength = segment.length;
    const startIndex = charIndex;
    const endIndex = charIndex + segmentLength - 1;
    const startLineNumber = Math.floor(startIndex / lineLength) + 1;
    const endLineNumber = Math.floor(endIndex / lineLength) + 1;
    const lineNumbers = range(startLineNumber, endLineNumber);
    result.push({ lineNumbers, word: segment });
    charIndex += segmentLength;
  }
  return result;
};

const getFormattedWordString = (wordWithFormat: WordWithFormat): string => {
  return `${wordWithFormat.word}(${wordWithFormat.lineNumbers.join(',')});`;
};

const getFormattedWordsString = (wordsWithFormat: WordWithFormat[]): string => {
  let output = '';
  for (const wordWithFormat of wordsWithFormat) {
    output = `${output}${getFormattedWordString(wordWithFormat)}`;
  }

  return output;
};

export const formatText = (text: string, lineLength: number): string => {
  const wordsWithFormat = analysisText(text, lineLength);
  return getFormattedWordsString(wordsWithFormat);
};
