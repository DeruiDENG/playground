import { strict } from 'assert';

/* Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

  Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5' */

export const dashatize = (num: number): string => {
  return num
    .toString()
    .replace(/[13579]/g, searchValue => `-${searchValue}-`)
    .replace(/--/g, '-')
    .replace(/(^-|-$)/g, '');
};
