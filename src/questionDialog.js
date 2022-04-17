import readlineSync from 'readline-sync';

const defaultFilterAnswerFn = (answer) => answer;

export default (question, correctAnswer, filterAnswerFn = defaultFilterAnswerFn) => {
  console.log(`Question: ${question}`);

  const dirtyAnswer = readlineSync.question('Your answer: ');
  const answer = filterAnswerFn(dirtyAnswer);

  const isCorrect = answer === correctAnswer;

  if (isCorrect) {
    console.log('Correct!');
  } else {
    console.log(`'${dirtyAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }

  return isCorrect;
};
