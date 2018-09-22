import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Hello } from './helloworld/Hello';
import { SimpleMessage } from './SimpleMessage/SimpleMessage';
import Catalog from './catalog/Catalog';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Catalog />
        <Switch>
          <Route
            exact
            path="/"
            component={Hello}
          />
          <Route
            path="/message"
            render={() => <SimpleMessage
              title={'Title of simple message'}
              description={'Description blablablabla'}
            />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default hot(module)(App);
