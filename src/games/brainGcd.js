import intersection from 'lodash/intersection.js';
import questionDialog from '../questionDialog.js';
import randomNumber from '../randomNumber.js';

const MAX_OPERAND = 100;
const MAX_DIVIDER = 10;

const getDivisors = (num) => {
  const divisors = [];
  const half = Math.floor(num / 2);

  for (let i = 1; i <= half; i += 1) {
    if (num % i === 0) {
      divisors.push(i);
    }

    divisors.push(num);
  }

  return divisors;
};

const getGreatestCommonDivisor = (num1, num2) => {
  const divisors1 = getDivisors(num1);
  const divisors2 = getDivisors(num2);

  const inters = intersection(divisors1, divisors2);

  return inters.pop() ?? 0;
};

export default () => {
  /**
   * Не хочется делать совсем случайные числа, чтобы они не имели НОД
   * Потому мы создадим некий делитель не больше 10 и под него два числа
   * Если они будут иметь бОльший НОД, то даже лучше,
   * Но так они хотя бы будут иметь хоть какой-то НОД
   */
  const divider = randomNumber(MAX_DIVIDER);
  const multiplier1 = randomNumber(MAX_OPERAND);
  const multiplier2 = randomNumber(MAX_OPERAND);

  const dividend1 = multiplier1 * divider;
  const dividend2 = multiplier2 * divider;

  const gcr = getGreatestCommonDivisor(dividend1, dividend2);

  const filterFn = (answer) => Number(answer);

  return questionDialog(`${dividend1} ${dividend2}`, gcr, filterFn);
};
