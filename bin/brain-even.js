#!/usr/bin/env node

import checkIsEven from "../src/checkIsEven.js";
import runChecks from "../src/runChecks.js";
import greeting from "../src/cli.js";

const SUCCESS_TRYES_COUNT = 3;

const userName = greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const result = runChecks(SUCCESS_TRYES_COUNT, checkIsEven);

if (result) {
  console.log(`Congratulations, ${userName}!`);
} else {
  console.log(`Let's try again, ${userName}!`);
}
