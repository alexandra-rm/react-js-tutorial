export const isNumber = (item: number | string): boolean =>
  !isNaN(Number(item));
