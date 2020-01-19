import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Students from '../pages/Students';
import Enrollment from '../pages/Enrollment';
import Plans from '../pages/Plans';
import Orders from '../pages/Orders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/students" component={Students} isPrivate />
      <Route path="/enrollment" component={Enrollment} isPrivate />
      <Route path="/plans" component={Plans} isPrivate />
      <Route path="/orders" component={Orders} isPrivate />
    </Switch>
  );
}
