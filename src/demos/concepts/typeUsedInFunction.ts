const createUser = (userName: string, age: number, gender: Gender)=> {
    return {
        name: userName,
        age,
        gender: gender == Gender.Male ? 'male' : 'femail',
    }
};

const userA = createUser('ddd', 30, Gender.Male);
const {gender, age} = userA;
console.log(gender);
