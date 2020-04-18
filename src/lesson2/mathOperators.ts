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

export type UnaryOperationType = (operand: number) => number;

export const factorial: UnaryOperationType = (operand: number): number =>
  operand ? operand * factorial(operand - 1) : 1;

export const square: UnaryOperationType = (operand: number): number =>
  pow(operand, 2);

export const binaryOperators: {
  [key: string]: BinaryOperationType;
} = {
  "*": mul,
  "/": div,
  "%": mod,
  "+": add,
  "-": minus,
  "^": pow,
};

export const unaryOperators: {
  [key: string]: UnaryOperationType;
} = {
  "!": factorial,
  "**": square,
};

export const mathPriorities: number[] = [-1, 0, 1, 2];

export const [UNARY_POSTFIX, ZEROTH, FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": FIRST,
  "/": FIRST,
  "%": FIRST,
  "+": SECOND,
  "-": SECOND,
  "^": ZEROTH,
  "!": UNARY_POSTFIX,
  "**": UNARY_POSTFIX,
};
