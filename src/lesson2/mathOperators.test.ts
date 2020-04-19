import {
  pow,
  mul,
  div,
  add,
  minus,
  mod,
  square,
  factorial,
  sin,
  cos,
  tg,
  ctg,
} from "./mathOperators";

describe("mathOperators test cases", () => {
  it("pow 2 ^ 3 to equal 8", () => {
    expect(pow(2, 3)).toBe(8);
  });

  it("pow 2 ^ 0 to equal 1", () => {
    expect(pow(2, 0)).toBe(1);
  });

  it("mul 1 * 2 to equal 2", () => {
    expect(mul(1, 2)).toBe(2);
  });

  it("mul 2 * 2 to equal 4", () => {
    expect(mul(2, 2)).toBe(4);
  });

  it("div 2 / 2 to equal 1", () => {
    expect(div(2, 2)).toBe(1);
  });

  it("div 4 / 2 to equal 2", () => {
    expect(div(4, 2)).toBe(2);
  });

  it("mod 2 / 2 to equal 0", () => {
    expect(mod(2, 2)).toBe(0);
  });

  it("mod 4 / 3 to equal 1", () => {
    expect(mod(4, 3)).toBe(1);
  });

  it("add 4 + 2 to equal 6", () => {
    expect(add(4, 2)).toBe(6);
  });

  it("minus 4 - 2 to equal 2", () => {
    expect(minus(4, 2)).toBe(2);
  });

  it("square 4 ** to equal 16", () => {
    expect(square(4)).toBe(16);
  });

  it("factorial 0 ! to equal 1", () => {
    expect(factorial(0)).toBe(1);
  });

  it("factorial 5 ! to equal 120", () => {
    expect(factorial(5)).toBe(120);
  });

  it("sin 0 to equal 0", () => {
    expect(sin(0)).toBe(0);
  });

  it("cos 0 to equal 1", () => {
    expect(cos(0)).toBe(1);
  });

  it("tg 30 to equal 0.58", () => {
    expect(tg(30)).toBe(0.58);
  });

  it("ctg 90 to equal 0", () => {
    expect(ctg(90)).toBe(0);
  });
});
