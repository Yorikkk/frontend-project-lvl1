#!/usr/bin/env node

import brainEven from '../src/games/brainEven.js';
import gameRunner from '../src/index.js';

const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

gameRunner(gameCondition, brainEven);
