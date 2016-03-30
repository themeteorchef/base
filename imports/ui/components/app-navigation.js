import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { PublicNavigation } from './public-navigation';
import { AuthenticatedNavigation } from './authenticated-navigation';

export class AppNavigation extends React.Component {
  renderNavigation( hasUser ) {
    return hasUser ? <AuthenticatedNavigation /> : <PublicNavigation />;
  }

  render() {
    return <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Application Name</a>
        </Navbar.Brand>
      </Navbar.Header>
      { this.renderNavigation( this.props.hasUser ) }
    </Navbar>;
  }
}
