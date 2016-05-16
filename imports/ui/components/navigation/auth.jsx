import React from 'react';
import { browserHistory } from 'react-router';

import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};

export const AuthenticatedNavigation = () => (
  <div>
    <Nav>
      <IndexLinkContainer to="/">
        <NavItem eventKey={ 1 } href="/">Dashboard</NavItem>
      </IndexLinkContainer>
      <LinkContainer to="/search">
        <NavItem eventKey={ 2 } href="/bios">Bios</NavItem>
      </LinkContainer>
      <LinkContainer to="/test">
        <NavItem eventKey={ 3 } href="/jobs">Jobs</NavItem>
      </LinkContainer>
      <LinkContainer to="/options">
        <NavItem eventKey={ 4 } href="/options">Options</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <NavDropdown eventKey={ 5 } title={ userName() } id="basic-nav-dropdown">
        <MenuItem eventKey={ 5.1 } onClick={ handleLogout }>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </div>
);