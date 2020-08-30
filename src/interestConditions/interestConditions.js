const calculateInterest = (value, percent) => {
  amountWithInterest = value * percent;
  return value + amountWithInterest;
};

module.exports = {
  calculateInterest: calculateInterest,
  interestForLateDays: (value, lateDays) => {
    if (lateDays === 0) {
      return value;
    } else {
      if (lateDays > 0 && lateDays <= 30) {
        return calculateInterest(value, 0.05);
      } else if (lateDays > 30 && lateDays <= 60) {
        return calculateInterest(value, 0.1);
      } else if (lateDays > 60) {
        return calculateInterest(value, 0.15);
      }
    }
  },
};
