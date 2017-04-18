import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PublicNavigation from './PublicNavigation.js';
import AuthenticatedNavigation from './AuthenticatedNavigation.js';

const renderNavigation = hasUser => (hasUser ? <AuthenticatedNavigation /> : <PublicNavigation />);

const AppNavigation = ({ hasUser }) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Application Name</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <div>
      { /*renderNavigation(hasUser)*/ }
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
    </div>
  </Navbar>
);

AppNavigation.propTypes = {
  hasUser: React.PropTypes.object,
};

export default AppNavigation;
