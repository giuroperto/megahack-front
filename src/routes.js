import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CreateDiscounts from './components/CreateDiscounts/CreateDiscounts';
import Discounts from './components/Discounts/Discounts';
import CreateRestaurants from './components/CreateRestaurants/CreateRestaurants';
import UserProfile from './components/UserProfile/UserProfile';


const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/create-discounts' component={CreateDiscounts} />
        <Route path='/discounts' component={Discounts} />
        <Route path='/create-restaurants' component={CreateRestaurants} />
        <Route path='/user-profile' component={UserProfile} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;