#!/usr/bin/env node

import brainPrime from '../src/games/brainPrime.js';
import gameRunner from '../src/index.js';

const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

gameRunner(gameCondition, brainPrime);
