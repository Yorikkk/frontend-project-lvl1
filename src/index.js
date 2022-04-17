import greeting from './cli.js';
import runChecks from './runChecks.js';

const SUCCESS_TRYES_COUNT = 3;

export default (gameCondition, gameFn) => {
  const userName = greeting();

  console.log(gameCondition);

  const result = runChecks(SUCCESS_TRYES_COUNT, gameFn);

  if (result) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
