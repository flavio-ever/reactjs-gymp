import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Enrollment from '../pages/Enrollment';
import Plans from '../pages/Plans';
import Orders from '../pages/Orders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/enrollment" component={Enrollment} />
      <Route path="/plans" component={Plans} />
      <Route path="/orders" component={Orders} />
    </Switch>
  );
}
