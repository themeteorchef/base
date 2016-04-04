import React from 'react';
import { browserHistory } from 'react-router';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

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

export const AuthenticatedNavigation = React.createClass({
  isActive( route, indexOnly ) {
    return this.props.activeRoute( route, indexOnly );
  },
  handleRouteChange() {
   this.forceUpdate();
  },
  render() {
    return <div>
      <Nav>
        <li className={ this.isActive( '/', true ) } onClick={ this.handleRouteChange }>
          <Link to="/">Index</Link>
        </li>
        <li className={ this.isActive( '/dashboard' ) } onClick={ this.handleRouteChange }>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </Nav>
      <Nav pullRight>
        <NavDropdown eventKey={ 3 } title={ userName() } id="basic-nav-dropdown">
          <MenuItem eventKey={ 3.3 } onClick={ handleLogout }>Logout</MenuItem>
        </NavDropdown>
      </Nav>
    </div>;
  }
});
