import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import JoinChannel from './components/JoinChannel';
import Chatroom from './components/Chatroom';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={JoinChannel} />
        <Route path="/chatroom/:name" exact component={Chatroom} />
        <Route component={PageNotFound}/>
      </Switch>
    </Router>
  );
};
export default App;
