import * as React from "react";
import { hot } from 'react-hot-loader';

import { Hello } from "./helloworld/Hello";
import {SimpleMessage} from "./SimpleMessage/SimpleMessage";

const App = () => (
    <div>
        <Hello name="Typescript" />
        <SimpleMessage title={"Simple Message title"} description="This is description."/>
    </div>
);

export default hot(module)(App);