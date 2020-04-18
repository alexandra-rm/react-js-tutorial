export type BinaryOperationType = (first: number, second: number) => number;

export const pow: BinaryOperationType = (
  first: number,
  second: number
): number => Math.pow(first, second);

export const mul: BinaryOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: BinaryOperationType = (
  first: number,
  second: number
): number => first / second;

export const mod: BinaryOperationType = (
  first: number,
  second: number
): number => first % second;

export const add: BinaryOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: BinaryOperationType = (
  first: number,
  second: number
): number => first - second;

export const mathOperators: { [key: string]: BinaryOperationType } = {
  "*": mul,
  "/": div,
  "%": mod,
  "+": add,
  "-": minus,
  "^": pow,
};

export const mathPriorities: number[] = [0, 1, 2];

const [ZEROTH, FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": FIRST,
  "/": FIRST,
  "%": FIRST,
  "+": SECOND,
  "-": SECOND,
  "^": ZEROTH,
};
