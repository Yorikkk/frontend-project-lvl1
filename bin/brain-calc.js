#!/usr/bin/env node

import brainCalc from '../src/games/brainCalc.js';
import gameRunner from '../src/index.js';

const gameCondition = 'What is the result of the expression?';

gameRunner(gameCondition, brainCalc);
