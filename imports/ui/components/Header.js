import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {Link} from 'react-router';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

class Logged extends React.Component {
  render() {
    return (
      <IconMenu iconButtonElement={< Avatar src = "uxceo-128.jpg" />}>
        <MenuItem primaryText="Log Out" leftIcon={< FontIcon className = "fa fa-sign-out" />} onClick={handleLogout}/>
      </IconMenu>
    );
  }
}

class Login extends React.Component {
  render() {
    return (
      <RaisedButton label="Login" icon={< FontIcon className = "fa fa-sign-in" />} containerElement={< Link to = "/login" />}/>
    );
  }
}

class Header extends React.Component {
  render() {
    const {user, isMobile, styles, handleDrawerToggle} = this.props;

    return (
      <AppBar title="Application Name" showMenuIconButton={isMobile} onLeftIconButtonTouchTap={handleDrawerToggle} iconElementRight={Meteor.user()
        ? <Logged/>
        : <Login/>}/>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
  isMobile: PropTypes.bool,
  styles: PropTypes.object,
  handleDrawerToggle: PropTypes.func
};

export default Header;
