// a function that takes an array and returns a
// reverse array without affecting the original one

const reverseArray = function (array) {
  // a copy of the original array
  const reversedArray = [...array];

  // reversing the copy array
  reversedArray.reverse();

  return reversedArray;
};

export default reverseArray;
