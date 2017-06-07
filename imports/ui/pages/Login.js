import React from 'react';
import {Link} from 'react-router';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import handleLogin from '../../modules/login';

export default class Login extends React.Component {
  componentDidMount() {
    handleLogin({component: this});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <Divider/>
        <form ref={form => (this.loginForm = form)} className="login" onSubmit={this.handleSubmit}>
          <TextField name="emailAddress" type="email" hintText="user@example.com" floatingLabelText="Email Address" fullWidth={true}/>
          <TextField name="password" type="password" floatingLabelText="Password" fullWidth={true}/>
          <RaisedButton label="Login" type="submit" labelPosition="before" primary={true} icon={< FontIcon className = "fa fa-sign-in" />}/> {/* <Button type="submit" bsStyle="success">Recover Password</Button> */}
          <Link className="pull-right" to="/recover-password">Forgot Password?</Link>
        </form>
      </div>
    );
  }
}
