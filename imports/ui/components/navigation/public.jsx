import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

export const PublicNavigation = () => (
  <Nav pullRight>
    <LinkContainer to="signup">
      <NavItem eventKey={ 1 } href="/signup">Sign Up</NavItem>
    </LinkContainer>
    <LinkContainer to="login">
      <NavItem eventKey={ 2 } href="/login">Log In</NavItem>
    </LinkContainer>
    <LinkContainer to="contact">
      <NavItem eventKey={ 3 } href="/contact">Contact</NavItem>
    </LinkContainer>
    <LinkContainer to="privacy">
      <NavItem eventKey={ 4 } href="/privacy">Privacy</NavItem>
    </LinkContainer>
  </Nav>
);
