import questionDialog from '../questionDialog.js';

const checkIsNumberEven = (number) => number % 2 === 0;

const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';

export default () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const isEven = checkIsNumberEven(randomNumber);
  const correctAnswer = isEven ? ANSWER_YES : ANSWER_NO;

  const filterFn = (answer) => answer.toLowerCase();

  return questionDialog(randomNumber, correctAnswer, filterFn);
};
