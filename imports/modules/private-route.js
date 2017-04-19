import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      (!Meteor.loggingIn() && !Meteor.userId()) ? (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      ) : (
        <Component {...props} />
      )
    )}
  />
);

PrivateRoute.defaultProps = {
  location: null,
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
  location: PropTypes.object,
};

export default PrivateRoute;
