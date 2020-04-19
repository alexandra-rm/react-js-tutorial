import {
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  zerothPrioritiesCalc,
  unaryPostfixPrioritiesCalc,
  unaryPrefixPrioritiesCalc,
} from "./engine";

describe("unaryPrefixPrioritiesCalc simple cases", () => {
  it("[sin, 0]", () => {
    expect(unaryPrefixPrioritiesCalc(["sin", 0])).toEqual([0]);
  });

  it("[tg, 0]", () => {
    expect(unaryPrefixPrioritiesCalc(["tg", 0])).toEqual([0]);
  });

  it("[3, *, 5, ^, 7, +, 8, !]", () => {
    expect(
      unaryPrefixPrioritiesCalc([3, "*", 5, "^", 7, "+", 8, "!"])
    ).toEqual([3, "*", 5, "^", 7, "+", 8, "!"]);
  });
});

describe("unaryPostfixPrioritiesCalc simple cases", () => {
  it("[5, **]", () => {
    expect(unaryPostfixPrioritiesCalc([5, "**"])).toEqual([25]);
  });

  it("[5, !]", () => {
    expect(unaryPostfixPrioritiesCalc([5, "!"])).toEqual([120]);
  });

  it("[3, !, **]", () => {
    expect(unaryPostfixPrioritiesCalc([3, "!", "**"])).toEqual([36]);
  });

  it("[3, *, 5, ^, 7, +, 8]", () => {
    expect(unaryPostfixPrioritiesCalc([3, "*", 5, "^", 7, "+", 8])).toEqual([
      3,
      "*",
      5,
      "^",
      7,
      "+",
      8,
    ]);
  });
});

describe("zerothPrioritiesCalc simple cases", () => {
  it("[1, ^, 32]", () => {
    expect(zerothPrioritiesCalc([1, "^", 32])).toEqual([1]);
  });

  it("[32, ^, 0]", () => {
    expect(zerothPrioritiesCalc([32, "^", 0])).toEqual([1]);
  });

  it("[2, ^, 4]", () => {
    expect(zerothPrioritiesCalc([2, "^", 4])).toEqual([16]);
  });

  it("[32, ^, 1]", () => {
    expect(zerothPrioritiesCalc([32, "^", 1])).toEqual([32]);
  });

  it("[32, +, 1]", () => {
    expect(zerothPrioritiesCalc([32, "+", 1])).toEqual([32, "+", 1]);
  });

  it("[32, /, 1]", () => {
    expect(zerothPrioritiesCalc([32, "/", 1])).toEqual([32, "/", 1]);
  });
});

describe("zerothPrioritiesCalc mixed with first and second priorities cases", () => {
  it("[32, /, 32, +, 10, *, 10]", () => {
    expect(zerothPrioritiesCalc([32, "/", 32, "+", 10, "*", 10])).toEqual([
      32,
      "/",
      32,
      "+",
      10,
      "*",
      10,
    ]);
  });
  it("[2, ^, 3, -, 10, /, 10]", () => {
    expect(zerothPrioritiesCalc([2, "^", 3, "-", 10, "/", 10])).toEqual([
      8,
      "-",
      10,
      "/",
      10,
    ]);
  });
});

describe("firstPrioritiesCalc invalid cases", () => {
  it("[32, ^, 32]", () => {
    expect(() => secondPrioritiesCalc([32, "^", 32])).toThrow(
      TypeError("Unexpected stack!")
    );
  });
});

describe("firstPrioritiesCalc simple cases", () => {
  it("[1, *, 32]", () => {
    expect(firstPrioritiesCalc([1, "*", 32])).toEqual([32]);
  });

  it("[32, /, 32]", () => {
    expect(firstPrioritiesCalc([32, "/", 32])).toEqual([1]);
  });

  it("[32, %, 32]", () => {
    expect(firstPrioritiesCalc([32, "%", 32])).toEqual([0]);
  });

  it("[32, +, 32]", () => {
    expect(firstPrioritiesCalc([32, "+", 32])).toEqual([32, "+", 32]);
  });
});

describe("firstPrioritiesCalc mixed with second priorities cases", () => {
  it("[32, /, 32, +, 10, *, 10]", () => {
    expect(firstPrioritiesCalc([32, "/", 32, "+", 10, "*", 10])).toEqual([
      1,
      "+",
      100,
    ]);
  });
  it("[32, %, 32, -, 10, /, 10]", () => {
    expect(firstPrioritiesCalc([32, "%", 32, "-", 10, "/", 10])).toEqual([
      0,
      "-",
      1,
    ]);
  });
});

describe("secondPrioritiesCalc invalid cases", () => {
  it("[32, /, 32]", () => {
    expect(() => secondPrioritiesCalc([32, "/", 32])).toThrow(
      TypeError("Unexpected stack!")
    );
  });

  it("[32, ^, 32]", () => {
    expect(() => secondPrioritiesCalc([32, "^", 32])).toThrow(
      TypeError("Unexpected stack!")
    );
  });
});

describe("secondPrioritiesCalc simple cases", () => {
  it("[32, +, 32]", () => {
    expect(secondPrioritiesCalc([32, "+", 32])).toEqual(64);
  });

  it("[32, -, 32]", () => {
    expect(secondPrioritiesCalc([32, "-", 32])).toEqual(0);
  });

  it("[32, -, 32, +, 10]", () => {
    expect(secondPrioritiesCalc([32, "-", 32, "+", 10])).toEqual(10);
  });
});
