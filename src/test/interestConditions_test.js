const chai = require("chai");
const updatedValue = require("../interestConditions/interestConditions");

const assert = chai.assert;

const normalParcel = {
  lateDays: 0,
  value: 10,
};

const twentyDaysLate = {
  lateDays: 20,
  value: 10,
};

const fortyDaysLate = {
  lateDays: 40,
  value: 10,
};

const seventyDaysLate = {
  lateDays: 70,
  value: 10,
};

describe("Test functions to test a routine that calculates the value of a parcel considering the percentage of interest according to the number of days late", () => {
  
  it("Test: Considering value with no day delay", () => {
    assert.equal(
      updatedValue.interestForLateDays(
        normalParcel.value,
        normalParcel.lateDays
      ),
      normalParcel.value
    );
  });

  it("Test: 5% interest is paid up to 30 days late", () => {
    assert.equal(
      updatedValue.interestForLateDays(
        twentyDaysLate.value,
        twentyDaysLate.lateDays
      ),
      updatedValue.calculateInterest(twentyDaysLate.value, 0.05)
    );
  });

  it("Test: 10% interest is paid from 31 to 60 days late", () => {
    assert.equal(
      updatedValue.interestForLateDays(
        fortyDaysLate.value,
        fortyDaysLate.lateDays
      ),
      updatedValue.calculateInterest(fortyDaysLate.value, 0.1)
    );
  });

  it("Test: 15% interest is paid after 60 days of delay", () => {
    assert.equal(
      updatedValue.interestForLateDays(
        seventyDaysLate.value,
        seventyDaysLate.lateDays
      ),
      updatedValue.calculateInterest(seventyDaysLate.value, 0.15)
    );
  });
});
