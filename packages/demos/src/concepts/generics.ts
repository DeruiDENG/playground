// Without generics
function firstNumber(elements: number[]): number {
  return elements[0];
}

function first(elements: any[]): any {
  return elements[0];
}

// With generics
function first2<T>(elements: T[]): T {
  return elements[0];
}

const example1 = first2([12, 23]); // typed as 'number'
const example2 = first2(['12', '23']); // typed as 'string'

// explicitly specify type:
const example3 = first2<true>([true, true]);
// const example4 = first2<true>([true, 234]); // TS2322: Type 'number' is not assignable to type 'true'

// Generics functions ->Generics Types
type FirstFn = (arg: number[]) => number;
type FirstFnWithGenerics<T> = <T>(arg: T[]) => T;

type FirstNumberWithGenerics = FirstFnWithGenerics<number> // typed as '(arg: number[]) => number'

// Generics, with constraint

function firstStringOrNumber<T extends string | number>(elements: T[]): T {
  return elements[0];
}

const firstStringOrNumber1 = firstStringOrNumber([5]); // typed as 'number'
const firstStringOrNumber2 = firstStringOrNumber(['5', '6']); // typed as 'string'

// Utility types

// https://www.typescriptlang.org/docs/handbook/utility-types.html
