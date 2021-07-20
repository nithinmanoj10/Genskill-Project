function getOrdinalNum(day) {
  var n = Number(day);
  return (
    n +
    (n > 0
      ? ["th", "st", "nd", "rd"][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : "")
  );
}
const getDate = function () {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("default", { month: "long" });
  return getOrdinalNum(day) + ", " + month;
};

export { getDate };
