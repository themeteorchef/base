import React from 'react';
import { Link } from 'react-router';
import { Nav, NavItem } from 'react-bootstrap';

export const PublicNavigation = () => (
  <Nav pullRight>
    <li role="presentation"><Link to="/signup">Sign Up</Link></li>
    <li role="presentation"><Link to="/login">Log In</Link></li>
  </Nav>
)
