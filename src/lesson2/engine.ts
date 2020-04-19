import { ParsedLineType } from "./parser";
import { isNumber } from "./helpers";
import {
  binaryOperators,
  unaryOperators,
  mathPriorities,
  mathOperatorsPriorities,
} from "./mathOperators";

const [UNARY_PREFIX, UNARY_POSTFIX, ZEROTH, FIRST, SECOND] = mathPriorities;

export const unaryPrefixPrioritiesCalc = (
  stack: ParsedLineType
): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, item) => {
    const prevItem = result[result.length - 1];

    if (
      !isNumber(String(prevItem)) &&
      mathOperatorsPriorities[prevItem] === UNARY_PREFIX
    ) {
      if (!unaryOperators[prevItem]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [...result.slice(0, -1), unaryOperators[prevItem](Number(item))];
    } else {
      result.push(item);
    }

    return result;
  }, []);

export const unaryPostfixPrioritiesCalc = (
  stack: ParsedLineType
): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, item) => {
    const prevItem = result[result.length - 1];

    if (
      !isNumber(String(item)) &&
      mathOperatorsPriorities[item] === UNARY_POSTFIX
    ) {
      if (!unaryOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [...result.slice(0, -1), unaryOperators[item](Number(prevItem))];
    } else {
      result.push(item);
    }

    return result;
  }, []);

export const zerothPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === ZEROTH) {
      if (!binaryOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -2),
        binaryOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }

    return result;
  }, []);

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (mathOperatorsPriorities[item] === ZEROTH) {
      throw new TypeError("Unexpected stack!");
    }
    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === FIRST) {
      if (!binaryOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -2),
        binaryOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }

    return result;
  }, []);

export const secondPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];

    if (
      mathOperatorsPriorities[item] == FIRST ||
      mathOperatorsPriorities[item] == ZEROTH
    ) {
      throw new TypeError("Unexpected stack!");
    }

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === SECOND) {
      result = binaryOperators[item](Number(result), Number(nextItem));
    }

    return result;
  }, Number(stack[0]));
