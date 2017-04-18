/* eslint-disable max-len */

import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Grid } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import AppNavigation from '../containers/AppNavigation.js';
import EditDocument from '../containers/EditDocument.js';
import ViewDocument from '../containers/ViewDocument.js';
import Documents from '../pages/Documents.js';
import NewDocument from '../pages/NewDocument.js';
import Index from '../pages/Index.js';
import Login from '../pages/Login.js';
import NotFound from '../pages/NotFound.js';
import RecoverPassword from '../pages/RecoverPassword.js';
import ResetPassword from '../pages/ResetPassword.js';
import Signup from '../pages/Signup.js';

const authenticate = (nextState, replace) => {
  /* if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  } */
};

const App = ({ children }) => (
  <div>
    <AppNavigation />
    <Grid>
      { children }
    </Grid>

    <Route path="/" component={Index} />
    <Route path="/documents" component={Documents} onEnter={authenticate} />

    {/* <Route path="/" component={Index} />
    <Route path="/documents/:_id/edit" component={EditDocument} onEnter={authenticate} />
    <Route path="/documents/:_id" component={ViewDocument} onEnter={authenticate} />
    <Route path="/documents/new" component={NewDocument} onEnter={authenticate} />
    <Route path="/documents" component={Documents} onEnter={authenticate} />
    <Route path="/login" component={Login} />
    <Route path="/recover-password" component={RecoverPassword} />
    <Route path="/reset-password/:token" component={ResetPassword} />
    <Route path="/signup" component={Signup} />
    <Route component={NotFound} /> */}
  </div>
);

App.defaultProps = {
  children: null,
};

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
