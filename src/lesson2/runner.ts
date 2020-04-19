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

  if (unaryPrefixPrioritiesRes.length === 1) {
    return Number(unaryPrefixPrioritiesRes[0]);
  }

  const unaryPostfixPrioritiesRes = unaryPostfixPrioritiesCalc(
    unaryPrefixPrioritiesRes
  );

  if (unaryPostfixPrioritiesRes.length === 1) {
    return Number(unaryPostfixPrioritiesRes[0]);
  }

  const zerothPrioritiesRes = zerothPrioritiesCalc(unaryPostfixPrioritiesRes);

  if (zerothPrioritiesRes.length === 1) {
    return Number(zerothPrioritiesRes[0]);
  }

  const firstPrioritiesRes = firstPrioritiesCalc(zerothPrioritiesRes);

  if (firstPrioritiesRes.length === 1) {
    return Number(firstPrioritiesRes[0]);
  }

  return secondPrioritiesCalc(firstPrioritiesRes);
};
