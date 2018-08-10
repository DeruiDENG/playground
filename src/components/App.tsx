import * as React from "react";
import { hot } from 'react-hot-loader';

import { Hello } from "./helloworld/Hello";

const App = () => (
    <Hello name="Typescript" />
);

export default hot(module)(App);