import questionDialog from '../questionDialog.js';
import randomNumber from '../randomNumber.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 1000;

const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';

const checkIsNumberPrime = (num) => {
  if (num < 2) {
    return false;
  }

  const half = Math.floor(num / 2);

  for (let i = 2; i <= half; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

export default () => {
  const number = randomNumber(MIN_NUMBER, MAX_NUMBER);
  const isPrime = checkIsNumberPrime(number);

  const correctAnswer = isPrime ? ANSWER_YES : ANSWER_NO;

  const filterFn = (answer) => answer.toLowerCase();

  return questionDialog(number, correctAnswer, filterFn);
};
