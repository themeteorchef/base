/* eslint-disable max-len */

import { Meteor } from 'meteor/meteor';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
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

const authenticate = (props, component) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    props.history.push('/login');
  }

  return component;
};

const logout = (history) => {
  Meteor.logout((error) => {
    if (error) {
      console.log(`Error: ${error}`);
      return <div>Logout Failed</div>;
    }

    history.push('/');
    return null;
  });
};

const App = () => (
  <Router>
    <div>
      <AppNavigation />
      <Grid>
        <Switch>
          <Route exact path="/" render={() => (<Index />)} />
          <Route path="/documents/new" render={props => (authenticate(props, <NewDocument {...props} />))} />
          <Route path="/documents/:_id/edit" render={props => (authenticate(props, <EditDocument {...props} />))} />
          <Route path="/documents/:_id" render={props => (authenticate(props, <ViewDocument {...props} />))} />
          <Route path="/documents" render={props => (authenticate(props, <Documents {...props} />))} />
          <Route path="/login" render={props => (<Login {...props} />)} />
          <Route path="/logout" render={({ history }) => (logout(history))} />
          <Route path="/recover-password" render={() => (<RecoverPassword />)} />
          <Route path="/reset-password/:token" render={props => (<ResetPassword {...props}  />)} />
          <Route path="/signup" render={props => (<Signup {...props} />)} />
          <Route render={() => (<NotFound />)} />
        </Switch>
      </Grid>
    </div>
  </Router>
);

export default App;
