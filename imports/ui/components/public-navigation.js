import React from 'react';
import { Link } from 'react-router';
import { Nav, NavItem } from 'react-bootstrap';

export const PublicNavigation = React.createClass({
  isActive( route, indexOnly ) {
    return this.props.activeRoute( route, indexOnly ) ? 'active' : '';
  },
  handleRouteChange() {
   this.forceUpdate();
  },
  render() {
    return <Nav pullRight>
      <li className={ this.isActive( '/signup' ) } onClick={ this.handleRouteChange }>
        <Link to="/signup">Sign Up</Link>
      </li>
      <li className={ this.isActive( '/login' ) } onClick={ this.handleRouteChange }>
        <Link to="/login">Log In</Link>
      </li>
    </Nav>;
  }
});
