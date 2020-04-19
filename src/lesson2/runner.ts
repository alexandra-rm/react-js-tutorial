import { parser } from "./parser";

import {
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  zerothPrioritiesCalc,
  unaryPostfixPrioritiesCalc,
  unaryPrefixPrioritiesCalc,
} from "./engine";

export const runner = (line: string): number => {
  const stack = parser(line);

  if (stack === null) {
    throw new TypeError("Unexpected string");
  }

  const unaryPrefixPrioritiesRes = unaryPrefixPrioritiesCalc(stack);

  const unaryPostfixPrioritiesRes = unaryPostfixPrioritiesCalc(
    unaryPrefixPrioritiesRes
  );

  const zerothPrioritiesRes = zerothPrioritiesCalc(unaryPostfixPrioritiesRes);

  const firstPrioritiesRes = firstPrioritiesCalc(zerothPrioritiesRes);

  return secondPrioritiesCalc(firstPrioritiesRes);
};
