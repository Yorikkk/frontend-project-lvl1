import readlineSync from 'readline-sync';

const checkIsNumberEven = (number) => number % 2 === 0;

const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';

export default () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const isEven = checkIsNumberEven(randomNumber);
  const correctAnswer = isEven ? ANSWER_YES : ANSWER_NO;

  console.log(`Question: ${randomNumber}`);

  const dirtyAnswer = readlineSync.question('Your answer: ');
  const answer = dirtyAnswer.toLowerCase();

  const isCorrect = answer === correctAnswer;

  if (isCorrect) {
    console.log('Correct!');
  } else {
    console.log(`'${dirtyAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }

  return isCorrect;
};
