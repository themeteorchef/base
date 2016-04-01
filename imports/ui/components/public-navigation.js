import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

export const PublicNavigation = ( { router } ) => (
  <Nav pullRight>
    <NavItem eventKey={ 1 } href="/signup">Sign Up</NavItem>
    <NavItem eventKey={ 2 } href="/login">Login</NavItem>
  </Nav>
)
