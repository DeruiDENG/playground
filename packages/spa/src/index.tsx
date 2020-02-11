import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
    <App />,
    document.getElementById("dom-entry")
);

const a = document.getElementById("dom-entry");
if (a) {
    a.appendChild(a);
}

enum Protocols {
    HTTP,
    HTTPS,
    FTP
}

type HyperTextProtocol = Protocols.HTTP | Protocols.HTTPS;
