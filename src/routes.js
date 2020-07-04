import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import SocialLogin from './components/SocialLogin/SocialLogin';

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={SocialLogin} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;