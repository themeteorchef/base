import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { PublicNavigation } from './public-navigation';
import { AuthenticatedNavigation } from './authenticated-navigation';

export class AppNavigation extends React.Component {
  renderNavigation( hasUser, activeRoute ) {
    return hasUser ? <AuthenticatedNavigation activeRoute={ activeRoute } /> : <PublicNavigation activeRoute={ activeRoute } />;
  }

  render() {
    return <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Application Name</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        { this.renderNavigation( this.props.hasUser, this.props.activeRoute ) }
      </Navbar.Collapse>
    </Navbar>;
  }
}
