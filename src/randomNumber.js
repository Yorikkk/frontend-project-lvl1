export default (minNumber, maxNumber = null) => {
  let min = minNumber;
  let max = maxNumber;

  if (maxNumber === null) {
    min = 0;
    max = minNumber;
  }

  return Math.floor(min + Math.random() * (max - min));
};
