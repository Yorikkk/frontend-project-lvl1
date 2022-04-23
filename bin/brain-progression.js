#!/usr/bin/env node

import brainProgression from '../src/games/brainProgression.js';
import gameRunner from '../src/index.js';

const gameCondition = 'What number is missing in the progression?';

gameRunner(gameCondition, brainProgression);
