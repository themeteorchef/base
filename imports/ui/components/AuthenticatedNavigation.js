import React from 'react';
import { BrowserRouter as Router, browserHistory, Link, Route, Redirect } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};

/* const AuthenticatedNavigation = () => (
  <div>
    <Nav>
      <LinkContainer to="/documents">
        <NavItem eventKey={2} href="/documents">Documents</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <NavDropdown eventKey={3} title={userName()} id="basic-nav-dropdown">
        <MenuItem eventKey={3.1} onClick={handleLogout}>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </div>
); */

const AuthenticatedNavigation = () => (
  <div>
    <Nav>
      <Link to="/documents">Documents</Link>
    </Nav>
    <Nav pullRight>
      <NavDropdown eventKey={3} title={userName()} id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}><Link to="/logout">Logout</Link></MenuItem>
      </NavDropdown>
    </Nav>
  </div>
);

export default AuthenticatedNavigation;
