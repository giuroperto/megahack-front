import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import SocialLogin from './components/SocialLogin/SocialLogin';
import CreateDiscounts from './components/CreateDiscounts/CreateDiscounts';
import Discounts from './components/Discounts/Discounts';
import CreateRestaurants from './components/CreateRestaurants/CreateRestaurants';
import UserProfile from './components/UserProfile/UserProfile';
import PointRules from './components/PointRules/PointRules';
import RestaurantProfile from './components/RestaurantProfile/RestaurantProfile';
import RestaurantRating from './components/RestaurantRating/RestaurantRating';



const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={SocialLogin} />
        {/* check picture */}
        <Route path='/create-discounts' component={CreateDiscounts} />
        {/* need formatting */}
        <Route path='/discounts' component={Discounts} />
        <Route path='/create-restaurants' component={CreateRestaurants} />
        <Route path='/user-profile' component={UserProfile} />
        <Route path='/rules' component={PointRules} />
        <Route path='/restaurant-profile' component={RestaurantProfile} />
        <Route path='/restaurant-rating' component={RestaurantRating} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;