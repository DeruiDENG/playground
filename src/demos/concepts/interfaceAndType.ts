interface Address {
    country: string,
    city: string,
    street: string,
    ZIP: number,
}

interface People {
    readonly name: string,
    address?: Address
}

type PeopleB = {
    name: string,
    address?: Address
}

const createPeople = (name: string): People => {
    return {
        name
    };
};

const user = createPeople('Alice');
console.log(user.name);
