export default (num, fn) => {
  for (let i = 0; i < num; i += 1) {
    if (fn() === false) {
      return false;
    }
  }

  return true;
};
