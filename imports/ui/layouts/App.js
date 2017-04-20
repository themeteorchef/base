/* eslint-disable max-len */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import PrivateRoute from '../../modules/private-route';
import AppNavigation from '../components/AppNavigation';
import EditDocument from '../pages/EditDocument';
import ViewDocument from '../pages/ViewDocument';
import Documents from '../pages/Documents';
import NewDocument from '../pages/NewDocument';
import Index from '../pages/Index';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import NotFound from '../pages/NotFound';
import RecoverPassword from '../pages/RecoverPassword';
import ResetPassword from '../pages/ResetPassword';
import Signup from '../pages/Signup';

const App = () => (
  <BrowserRouter>
    <div>
      <AppNavigation />
      <Grid>
        <Switch>
          <Route exact path="/" component={Index} />
          <PrivateRoute path="/documents/new" component={NewDocument} />
          <PrivateRoute path="/documents/:_id/edit" component={EditDocument} />
          <PrivateRoute path="/documents/:_id" component={ViewDocument} />
          <PrivateRoute path="/documents" component={Documents} />
          <Route path="/login" component={Login} />
          <Logout path="/logout" />
          <Route path="/recover-password" component={RecoverPassword} />
          <Route path="/reset-password/:token" component={ResetPassword} />
          <Route path="/signup" component={Signup} />
          <Route component={NotFound} />
        </Switch>
      </Grid>
    </div>
  </BrowserRouter>
);

export default App;
