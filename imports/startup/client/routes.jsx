import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router';

import { App } from '../../ui/layouts/app';
import { Dashboard } from '../../ui/pages/dashboard';
import { Index } from '../../ui/pages/index';
import { Login } from '../../ui/pages/login';
import { RecoverPassword } from '../../ui/pages/recover-password';
import { ResetPassword } from '../../ui/pages/reset-password';
import { Signup } from '../../ui/pages/signup';

const requireAuth = ( nextState, replace ) => {
  if ( !Meteor.loggingIn() && !Meteor.user() ) {
    replace({
      pathname: '/login',
      state: { nextPathName: nextState.location.pathname }
    });
  }
};

Meteor.startup( () => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } onEnter={ requireAuth } />
        <Route name="dashboard" path="/dashboard" component={ Dashboard } onEnter={ requireAuth } />
        <Route name="login" path="/login" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="signup" path="/signup" component={ Signup } />
      </Route>
    </Router>,
    document.getElementById( 'react-root' )
  );
});
