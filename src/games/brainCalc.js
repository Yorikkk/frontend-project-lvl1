import questionDialog from '../questionDialog.js';

const operations = ['+', '-', '*'];

const randomOperation = () => operations[Math.floor(Math.random() * operations.length)];

const randomOperator = () => Math.floor(Math.random() * 100);

const getOperationData = () => {
  const operation = randomOperation();
  const operand1 = randomOperator();
  const operand2 = randomOperator();

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
