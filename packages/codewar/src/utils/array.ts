export function remove<T>(array: T[], ele: T): T[] {
  const index = array.indexOf(ele);
  if (index !== -1) {
    const newArray = [...array];
    newArray.splice(index, 1);
    return newArray;
  }

  return array;
}

export function uniq<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}

export function repeat<T>(element: T, times: number): T[] {
  const arr = [];
  while (arr.length !== times) {
    arr.push(element);
  }

  return arr;
}
