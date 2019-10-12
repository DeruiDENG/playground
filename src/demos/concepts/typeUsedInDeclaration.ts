/* eslint-disable */

// Boolean
const isActive: boolean = true;
const isAlive = true;

// Number
const aCount: number = 5;
const anotherNumber = 5;
const hexNumber = 0x10;

// String
const aString = 'Hello';
const bString = `Hello ${aString}`;

// Array
const aList: number[] = [1, 2, 3];
const bList: Array<number> = [1, 2, 3];
const cList = [1, 2, 3];

// Enum
enum Gender {
  Male,
  Female,
}

const person = {
  name: 'Derui',
  gender: Gender.Male,
};

// Any
let aVariable: any = 5;
aVariable = 'string';
