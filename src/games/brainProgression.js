import questionDialog from '../questionDialog.js';
import randomNumber from '../randomNumber.js';

const MIN_LENGTH = 5;
const MAX_LENGTH = 12;

const MAX_STEP = 10;

const MAX_START_VALUE = 100;

export default () => {
  const progressionLength = randomNumber(MIN_LENGTH, MAX_LENGTH);
  const emptyIndex = randomNumber(progressionLength);

  const step = randomNumber(MAX_STEP);
  const progression = [];

  let resultValue = 0;
  let currentValue = randomNumber(MAX_START_VALUE);

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === emptyIndex) {
      progression.push('..');
      resultValue = currentValue;
    } else {
      progression.push(currentValue);
    }

    currentValue += step;
  }

  const filterFn = (answer) => Number(answer);

  return questionDialog(progression.join(' '), resultValue, filterFn);
};
