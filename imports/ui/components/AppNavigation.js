import React from 'react';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import PublicNavigation from './PublicNavigation.js';
import AuthenticatedNavigation from './AuthenticatedNavigation.js';

const renderNavigation = hasUser => (hasUser
  ? <AuthenticatedNavigation/>
  : <PublicNavigation/>);

const AppNavigation = ({hasUser}) => (
  <AppBar title="Application Name" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
// <Navbar>
//   <Navbar.Header>
//     <Navbar.Brand>
//       <Link to="/">Application Name</Link>
//     </Navbar.Brand>
//     <Navbar.Toggle />
//   </Navbar.Header>
//   <Navbar.Collapse>
//     { renderNavigation(hasUser) }
//   </Navbar.Collapse>
// </Navbar>
);

// AppNavigation.propTypes = {
//   hasUser: React.PropTypes.object
// };

export default AppNavigation;
