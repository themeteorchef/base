import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import {Link} from 'react-router';

class Logged extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleLogout() {
    Meteor.logout(() => browserHistory.push('/login'));
  }

  handleTouchTap(event) {
    event.preventDefault();
    this.setState({open: true, anchorEl: event.currentTarget});
  }

  handleRequestClose() {
    this.setState({open: false});
  }

  render() {
    const {currentUser} = this.props;

    return (
      <div>
        <FlatButton label={currentUser.profile.name.first} icon={< FontIcon className = "fa fa-user-circle" />} labelPosition="before" onTouchTap={this.handleTouchTap.bind(this)}/>
        <Popover open={this.state.open} onRequestClose={this.handleRequestClose.bind(this)} anchorEl={this.state.anchorEl}>
          <Menu>
            <MenuItem primaryText="Log Out" leftIcon={< FontIcon className = "fa fa-sign-out" />} onClick={this.handleLogout.bind(this)}/>
          </Menu>
        </Popover>
      </div>
    );
  }
}

Logged.propTypes = {
  currentUser: PropTypes.object
};

class Login extends React.Component {
  render() {
    return (
      <RaisedButton label="Login" icon={< FontIcon className = "fa fa-sign-in" />} containerElement={< Link to = "/login" />}/>
    );
  }
}

export default class Header extends React.Component {
  render() {
    const {currentUser, isMobile, handleDrawerToggle} = this.props;

    return (
      <AppBar title="Application Name" showMenuIconButton={isMobile} onLeftIconButtonTouchTap={handleDrawerToggle} iconElementRight={currentUser
        ? <Logged currentUser={currentUser}/>
        : <Login/>} style={{
        position: "fixed",
        top: 0
      }}/>
    );
  }
}

Header.propTypes = {
  currentUser: PropTypes.object,
  isMobile: PropTypes.bool,
  styles: PropTypes.object,
  handleDrawerToggle: PropTypes.func
};
