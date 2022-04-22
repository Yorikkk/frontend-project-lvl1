#!/usr/bin/env node

import brainGcd from '../src/games/brainGcd.js';
import gameRunner from '../src/index.js';

const gameCondition = 'Find the greatest common divisor of given numbers.';

gameRunner(gameCondition, brainGcd);
