import { convertNumber } from "./utils";

it("when convert 0 it throws exception", () => {
  expect(() => {
    convertNumber(0);
  }).toThrow();
});

it("convert normal numbers is ok", () => {
  expect(convertNumber(1)).toBe("1");
  expect(convertNumber(2)).toBe("2");
});

it("convert numbers which are multiples of 3 is ok", () => {
  const expected = "Fizz";
  expect(convertNumber(3)).toBe(expected);
  expect(convertNumber(6)).toBe(expected);
});

it("convert numbers which are multiples of 5 is ok", () => {
  const expected = "Buzz";
  expect(convertNumber(5)).toBe(expected);
  expect(convertNumber(10)).toBe(expected);
});

it("convert numbers which are multiples of 15 is ok", () => {
  const expected = "FizzBuzz";
  expect(convertNumber(15)).toBe(expected);
  expect(convertNumber(30)).toBe(expected);
});
