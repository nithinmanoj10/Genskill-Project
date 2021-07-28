// a function to check if a string is a number or not
// returns true if number, else false

const isNumeric = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

export default isNumeric;
