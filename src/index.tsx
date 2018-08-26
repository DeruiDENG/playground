import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/App";

ReactDOM.render(
    <App />,
    document.getElementById("dom-entry")
);

interface User {
    readonly id: number,
    name: string,
}

const user: User = {
    id: 5,
    name: 'ddd',
};

user.name += "dddd";
