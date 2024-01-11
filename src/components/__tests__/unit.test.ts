import {formatValue, fixDecimalsPart, getHistoricPrice} from "../helpers";

describe("Function getHistoricPrice", () => {
  test("With 10% increase.", async () => {
    expect(getHistoricPrice(10, 120)).toBe(132);
  });

  test("With 100% increase. ", async () => {
    expect(getHistoricPrice(100, 0.00000000000000121)).toBe(0.00000000000000242);
  });

  test("With reduction by 50%", async () => {
    expect(getHistoricPrice(-50, 9999999)).toBe(4999999.5);
  });

  test("With reduction by 90%", async () => {
    expect(getHistoricPrice(-90, 800)).toBe(80);
  });
});

describe("Function fixDecimalsPart", () => {
  test("Number with decimals.", async () => {
    expect(fixDecimalsPart(100.12345, 2)).toBe("100.12");
  });

  test("Float with 5 decimals.", async () => {
    expect(fixDecimalsPart(0.00000000000000121, 5)).toBe("0.00000");
  });

  test("Number without decimals.", async () => {
    expect(fixDecimalsPart(9999999.43434, 0)).toBe("9999999");
  });
  test("Number with 2 decimals.", async () => {
    expect(fixDecimalsPart(9999999, 2)).toBe("9999999.00");
  });

  test("Check 999999 billions.", async () => {
    expect(fixDecimalsPart(999999999999999 / 1000000000, 2)).toBe("999999.99");
  });
});

describe("Function formatValue:", () => {
  test("With decimals.", async () => {
    expect(formatValue(1.000000000000121)).toBe("1.00...121");
  });

  test("With float.", async () => {
    expect(formatValue(0.00000000000000121)).toBe("0.00...121");
  });

  test("With 10 millions", async () => {
    expect(formatValue(9999999)).toBe("9.99 M");
  });

  test("With 999999 billions", async () => {
    expect(formatValue(999999999999999)).toBe("999999.99 B");
  });
});
