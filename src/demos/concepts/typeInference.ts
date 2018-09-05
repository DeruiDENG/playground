// Type Inference for rest parameters
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

// Type guard
interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.height * s.width;
        case "circle":
            return Math.PI * s.radius ** 2;
    }
}


