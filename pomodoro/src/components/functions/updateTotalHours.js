// a function that increments total seconds of each hour by one

const updateTotalHours = function (totalHours) {
  const d = new Date();
  totalHours[d.getHours()] += 1;
};
