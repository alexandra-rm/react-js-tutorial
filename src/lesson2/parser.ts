import { isNumber } from "./helpers";
import {
  mathOperatorsPriorities,
  UNARY_POSTFIX,
  UNARY_PREFIX,
} from "./mathOperators";

export type ParsedLineType = (number | string)[];

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");

  const parsStack = stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];

    const isValidNumberPush = !isNumber(prevItem) && isNumber(item);

    const isValidOperatorPush =
      (isNumber(prevItem) &&
        !isNumber(item) &&
        mathOperatorsPriorities.hasOwnProperty(item)) ||
      (!isNumber(prevItem) &&
        mathOperatorsPriorities.hasOwnProperty(prevItem) &&
        mathOperatorsPriorities[prevItem] === UNARY_POSTFIX &&
        mathOperatorsPriorities.hasOwnProperty(item)) ||
      (prevItem
        ? !isNumber(prevItem) &&
          mathOperatorsPriorities.hasOwnProperty(prevItem) &&
          mathOperatorsPriorities[prevItem] !== UNARY_POSTFIX &&
          mathOperatorsPriorities[item] === UNARY_PREFIX
        : mathOperatorsPriorities[item] === UNARY_PREFIX);

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidOperatorPush) {
      result.push(item);
    } else {
      throw new TypeError("Unexpected string");
    }

    return result;
  }, []);

  if (
    parsStack &&
    !isNumber(parsStack[parsStack.length - 1]) &&
    mathOperatorsPriorities[parsStack[parsStack.length - 1]] !== UNARY_POSTFIX
  ) {
    throw new TypeError("Unexpected string");
  }

  return parsStack;
};
