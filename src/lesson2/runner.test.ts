import { runner } from "./runner";

describe("Runner simple cases", () => {
  it("1 * 32", () => {
    expect(runner("1 * 32")).toEqual(32);
  });

  it("2 * 32", () => {
    expect(runner("2 * 32")).toEqual(64);
  });

  it("2 + 32", () => {
    expect(runner("2 + 32")).toEqual(34);
  });

  it("2 - 1", () => {
    expect(runner("2 - 1")).toEqual(1);
  });

  it("35 % 3", () => {
    expect(runner("35 % 3")).toEqual(2);
  });

  it("5 **", () => {
    expect(runner("5 **")).toEqual(25);
  });

  it("cos 0", () => {
    expect(runner("cos 0")).toEqual(1);
  });

  it("ctg 90", () => {
    expect(runner("ctg 90")).toEqual(0);
  });
});

describe("Runner tripled/mixed cases", () => {
  it("2 * 2 * 3", () => {
    expect(runner("2 * 2 * 3")).toEqual(12);
  });

  it("2 * 2 + 3", () => {
    expect(runner("2 * 2 + 3")).toEqual(7);
  });

  it("2 + 2 * 3", () => {
    expect(runner("2 + 2 * 3")).toEqual(8);
  });

  it("2 + 3 % 2", () => {
    expect(runner("2 + 3 % 2")).toEqual(3);
  });

  it("2 ** !", () => {
    expect(runner("2 ** !")).toEqual(24);
  });

  it("sin 0 !", () => {
    expect(runner("sin 0 !")).toEqual(1);
  });

  it("sin 30 + cos 60", () => {
    expect(runner("sin 30 + cos 60")).toEqual(1);
  });
});

describe("Runner long cases", () => {
  it("20 + 1 * 10 - 5 * 3", () => {
    expect(runner("20 + 1 * 10 - 5 * 3")).toEqual(15);
  });

  it("20 - 10 * 10 / 5 - 3", () => {
    expect(runner("20 - 10 * 10 / 5 - 3")).toEqual(-3);
  });

  it("2 + 5 * 7 % 3 * 4 / 5", () => {
    expect(runner("2 + 5 * 7 % 3 * 4 / 2")).toEqual(6);
  });

  it("2 + 5 ! / 120 - 5", () => {
    expect(runner("2 + 5 ! / 120 - 5")).toEqual(-2);
  });

  it("cos 0 * 2 + 5 ** / 25 - 5", () => {
    expect(runner("cos 0 * 2 + 5 ** / 25 - 5")).toEqual(-2);
  });
});
