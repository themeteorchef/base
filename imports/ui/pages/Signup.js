import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import handleSignup from '../../modules/signup';

export default class Signup extends React.Component {
  componentDidMount() {
    handleSignup({component: this});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-8 col-lg-6">
          <h2>Sign Up</h2>
          <Divider/>
          <form ref={form => (this.signupForm = form)} onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-xs-6">
                <TextField name="firstName" hintText="John" floatingLabelText="First Name" fullWidth={true}/>
              </div>
              <div className="col-xs-6">
                <TextField name="lastName" hintText="Smith" floatingLabelText="Last Name" fullWidth={true}/>
              </div>
            </div>
            <TextField name="emailAddress" type="email" hintText="user@example.com" floatingLabelText="Email Address" fullWidth={true}/>
            <TextField name="password" type="password" floatingLabelText="Password" fullWidth={true}/>
            <RaisedButton label="Sign Up" type="submit" labelPosition="before" primary={true} icon={< FontIcon className = "fa fa-user-plus" />}/> {/* <Button type="submit" bsStyle="success">Recover Password</Button> */}
            <Link className="pull-right" to="/login">Already have an account?</Link>
          </form>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  handleSnackbarOpen: PropTypes.func
};
