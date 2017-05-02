import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import PublicNavigation from './PublicNavigation.js';
import AuthenticatedNavigation from './AuthenticatedNavigation.js';
import container from '../../modules/container';

const renderNavigation = hasUser => (hasUser ? <AuthenticatedNavigation /> : <PublicNavigation />);

const AppNavigation = ({ hasUser }) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Application Name</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      { renderNavigation(hasUser) }
    </Navbar.Collapse>
  </Navbar>
);

AppNavigation.propTypes = {
  hasUser: PropTypes.object,
};

export default container((props, onData) => {
  const subscription = Meteor.subscribe('users.info');
  if (subscription.ready()) {
    onData(null, { hasUser: Meteor.user() });
  }
}, AppNavigation);
