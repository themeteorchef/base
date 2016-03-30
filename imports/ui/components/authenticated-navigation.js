import React from 'react';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const handleLogout = () => {
  return Meteor.logout();
};

const userName = () => {
  const user = Meteor.user();
  if ( user ) {
    const name = user.profile.name;
    return `${ name.first } ${ name.last }`;
  }
};

export const AuthenticatedNavigation = () => (
  <div>
    <Nav>
      <NavItem eventKey={1} href="/">Index</NavItem>
      <NavItem eventKey={2} href="/dashboard">Dashboard</NavItem>
    </Nav>
    <Nav pullRight>
      <NavDropdown eventKey={3} title={ userName() } id="basic-nav-dropdown">
        <MenuItem eventKey={3.3} onClick={ handleLogout }>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </div>
)
