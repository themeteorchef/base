import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const Logout = ({ ...rest }) => {
  Meteor.logout((error) => {
    if (error) {
      return <div>Logout Failed - Error: {error}</div>;
    }

    return true;
  });

  return (
    <Route
      {...rest}
      render={props => (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      )}
    />
  );
};

Logout.defaultProps = {
  location: null,
};

Logout.propTypes = {
  location: PropTypes.object,
};

export default Logout;
