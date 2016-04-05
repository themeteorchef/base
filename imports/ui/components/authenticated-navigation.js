import React from 'react';
import { browserHistory, IndexLink, Link } from 'react-router';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const handleLogout = () => {
  return Meteor.logout( () => browserHistory.push( '/login' ) );
};

const userName = () => {
  const user = Meteor.user();
  if ( user ) {
    const name = user && user.profile ? user.profile.name : '';
    return `${ name.first } ${ name.last }`;
  }
};

export const AuthenticatedNavigation = () => (
  <div>
    <Nav>
      <li><IndexLink to="/" activeClassName="active">Index</IndexLink></li>
      <li><Link to="/dashboard" activeClassName="active">Dashboard</Link></li>
    </Nav>
    <Nav pullRight>
      <NavDropdown eventKey={ 3 } title={ userName() } id="basic-nav-dropdown">
        <MenuItem eventKey={ 3.1 } onClick={ handleLogout }>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </div>
)
