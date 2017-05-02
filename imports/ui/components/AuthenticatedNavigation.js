import React from 'react';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

const userName = () => {
  const user = Meteor.user();
  const name = user ? user.name : '';
  return user ? `${name.first} ${name.last}` : '';
};

const AuthenticatedNavigation = ({ history }) => (
  <div>
    <Nav>
      <LinkContainer to="/documents">
        <NavItem eventKey={2} href="/documents">Documents</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <NavDropdown eventKey={3} title={userName()} id="basic-nav-dropdown">
        <MenuItem eventKey={3.1} onClick={() => Meteor.logout(() => history.push('/login'))}>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </div>
);

AuthenticatedNavigation.defaultProps = {
  history: null,
};

AuthenticatedNavigation.propTypes = {
  history: PropTypes.object,
};

export default withRouter(AuthenticatedNavigation);
