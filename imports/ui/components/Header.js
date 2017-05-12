import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {Link} from 'react-router';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

class Logged extends React.Component {
  render() {
    return (
      <IconMenu iconButtonElement={< IconButton > < FontIcon className = "fa fa-user-circle" />< /IconButton >}>
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

export default class Header extends React.Component {
  render() {
    const {user, isMobile, handleDrawerToggle} = this.props;

    return (
      <AppBar title="Application Name" showMenuIconButton={isMobile} onLeftIconButtonTouchTap={handleDrawerToggle} iconElementRight={Meteor.user()
        ? <Logged/>
        : <Login/>} style={{
        position: "fixed",
        top: 0
      }}/>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
  isMobile: PropTypes.bool,
  styles: PropTypes.object,
  handleDrawerToggle: PropTypes.func
};
