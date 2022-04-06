const calcDayOld = year => {
  let result = 0;
  for (let i = year; i <= 2020; i++) {
    if (isLeapYear(i)) {
      result += 366;
    } else {
      result += 365;
    }
  }
  return result;
};
