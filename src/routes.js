import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Logon from './components/Logon/Logon';

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Logon} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;