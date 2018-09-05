// Instead of :
// const getName = (objWithName: { name: string }): string => {
//     return objWithName.name;
// };

// We can write:
interface ObjWithName {
    name: string,
}

const getName = (objWithName: ObjWithName): string => {
    return objWithName.name;
};

const aObjectWithName = {
    name: 'David',
    gender: 'male'
};

const aObjectWithoutName = {
    count: 5,
};

getName(aObjectWithName);
// getName(aObjectWithoutName); // compile time error


