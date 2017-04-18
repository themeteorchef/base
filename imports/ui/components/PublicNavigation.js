import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

/* const PublicNavigation = () => (
  <Nav pullRight>
    <LinkContainer to="signup">
      <NavItem eventKey={1} href="/signup">Sign Up</NavItem>
    </LinkContainer>
    <LinkContainer to="login">
      <NavItem eventKey={2} href="/login">Log In</NavItem>
    </LinkContainer>
  </Nav>
); */

/* const PublicNavigation = () => (
  <Nav pullRight>
    <Link to="signup">
      <NavItem eventKey={1} href="/signup">Sign Up</NavItem>
    </Link>
    <Link to="login">
      <NavItem eventKey={2} href="/login">Log In</NavItem>
    </Link>
  </Nav>
);*/

const PublicNavigation = () => (
  <div>
    <Link to="/signup">Sign Up</Link>
    <Link to="/login">Log In</Link>
  </div>
);

export default PublicNavigation;
