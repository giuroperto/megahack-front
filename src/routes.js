import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CreateDiscounts from './components/CreateDiscounts/CreateDiscounts';

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/create-discounts' component={CreateDiscounts} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;