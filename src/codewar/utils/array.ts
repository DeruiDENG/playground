export function remove<T>(array: Array<T>, ele: T): Array<T> {
  const index = array.indexOf(ele);
  if (index !== -1) {
    const newArray = [...array];
    newArray.splice(index, 1);
    return newArray;
  }

  return array;
}

export function uniq<T>(array: Array<T>): Array<T> {
  return Array.from(new Set(array));
}


export function repeat<T>(element: T, times: number): Array<T> {
  const arr = [];
  while (arr.length !== times) {
    arr.push(element);
  }

  return arr;
}
