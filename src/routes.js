import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
//import NotFound from './NotFound';

const Routes = (props) => {
  return (
    <Router {...props}>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  )
}

export default Routes; 