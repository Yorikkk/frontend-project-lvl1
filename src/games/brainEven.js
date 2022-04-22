import questionDialog from '../questionDialog.js';
import randomNumber from '../randomNumber.js';

const MAX_OPERAND = 100;

const checkIsNumberEven = (number) => number % 2 === 0;

const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';

export default () => {
  const number = randomNumber(MAX_OPERAND);
  const isEven = checkIsNumberEven(number);

  const correctAnswer = isEven ? ANSWER_YES : ANSWER_NO;

  const filterFn = (answer) => answer.toLowerCase();

  return questionDialog(number, correctAnswer, filterFn);
};
