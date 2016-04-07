import React from 'react';
import { browserHistory } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
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
      <IndexLinkContainer to="/">
        <NavItem eventKey={ 1 } href="/">Index</NavItem>
      </IndexLinkContainer>
      <LinkContainer to="dashboard">
        <NavItem eventKey={ 2 } href="/dashboard">Dashboard</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <NavDropdown eventKey={ 3 } title={ userName() } id="basic-nav-dropdown">
        <MenuItem eventKey={ 3.1 } onClick={ handleLogout }>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </div>
)
