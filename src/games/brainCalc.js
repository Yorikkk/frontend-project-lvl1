import questionDialog from '../questionDialog.js';
import randomNumber from '../randomNumber.js';

const MAX_OPERAND = 100;

const operations = ['+', '-', '*'];

const getOperationData = () => {
  const operation = operations[randomNumber(operations.length)];

  const operand1 = randomNumber(MAX_OPERAND);
  const operand2 = randomNumber(MAX_OPERAND);

  const result = [`${operand1} ${operation} ${operand2}`];

  switch (operation) {
    case '+': return [...result, operand1 + operand2];
    case '-': return [...result, operand1 - operand2];
    case '*': return [...result, operand1 * operand2];
    default: return [];
  }
};

export default () => {
  const [question, correctAnswer] = getOperationData();

  const filterFn = (answer) => Number(answer);

  return questionDialog(question, correctAnswer, filterFn);
};
