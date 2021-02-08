import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import JoinChannel from './components/JoinChannel';
import Chatroom from './components/Chatroom';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={JoinChannel} />
        <Route path="/chatroom/:name" exact component={Chatroom} />
      </Switch>
    </Router>
  );
};
export default App;
