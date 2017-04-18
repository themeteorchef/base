/* eslint-disable max-len */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import App from '../../ui/layouts/App.js';


const authenticate = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Route exact path="/" component={App}>
        {/* <IndexRoute name="index" component={Index} />
        <Route name="documents" path="/documents" component={Documents} onEnter={authenticate} />
        <Route name="newDocument" path="/documents/new" component={NewDocument} onEnter={authenticate} />
        <Route name="editDocument" path="/documents/:_id/edit" component={EditDocument} onEnter={authenticate} />
        <Route name="viewDocument" path="/documents/:_id" component={ViewDocument} onEnter={authenticate} />
        <Route name="login" path="/login" component={Login} />
        <Route name="recover-password" path="/recover-password" component={RecoverPassword} />
        <Route name="reset-password" path="/reset-password/:token" component={ResetPassword} />
        <Route name="signup" path="/signup" component={Signup} />
        <Route path="*" component={NotFound} /> */}
      </Route>
    </Router>,
    document.getElementById('react-root'),
  );
});
