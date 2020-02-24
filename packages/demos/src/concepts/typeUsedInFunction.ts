const multiply = (valueA: number, valueB: number, valueC?: number): number => {
  if (valueC !== undefined) {
    return valueA * valueB * valueC;
  }

  return valueA * valueB;
};

const multiplyResult = multiply(5, 6); // 30
multiply(5, 6, 2); // 60
// multiply('2', 4);  // Compile time error

const getUserName = (user: { userName: string; age: number }): string => {
  return user.userName;
};

const aUser = {
  userName: 'David',
  age: 50,
};

const notAUser = {
  address: 'blablabla',
};

getUserName(aUser); // 'David'
// getUserName(notAUser); // Compile time error
