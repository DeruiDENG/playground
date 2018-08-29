const props = {
    price: 5,
    amount: 1,
    name: 'meals',
};

const {price, ...other} = props;


const payload = {
    amount: {
        price: 5
    }
};

const state = {
    amount: {
        amount: 1,
        price: 6
    }
};

const result = {
    ...state,
    ...payload
};


