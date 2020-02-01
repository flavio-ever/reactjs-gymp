import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import StudentsList from '../pages/Students/List';
import StudentsForm from '../pages/Students/Form';
import Enrollment from '../pages/Enrollment';
import Plans from '../pages/Plans';
import Orders from '../pages/Orders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students" component={StudentsList} isPrivate exact />
      <Route path="/students/new" component={StudentsForm} isPrivate />
      <Route path="/students/:id/edit" component={StudentsForm} isPrivate />

      <Route path="/enrollment" component={Enrollment} isPrivate />
      <Route path="/plans" component={Plans} isPrivate />
      <Route path="/orders" component={Orders} isPrivate />
    </Switch>
  );
}
