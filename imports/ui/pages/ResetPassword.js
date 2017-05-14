import React from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import handleResetPassword from '../../modules/reset-password';

export default class ResetPassword extends React.Component {
  componentDidMount() {
    handleResetPassword({component: this, token: this.props.params.token});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <span style={{
          fontSize: 22
        }}>Reset Password</span>
        <Divider/>
        <br/>
        To reset your password, enter a new one below. You will be logged in with your new password.
        <form ref={form => (this.resetPasswordForm = form)} className="reset-password" onSubmit={this.handleSubmit}>
          <TextField name="newPassword" type="password" floatingLabelText="New Password" fullWidth={true}/>
          <TextField name="repeatNewPassword" type="password" floatingLabelText="Repeat New Password" fullWidth={true}/>
          <RaisedButton label="Reset Password &amp; Login" type="submit" labelPosition="before" primary={true} icon={< FontIcon className = "fa fa fa-key" />}/> {/* <Button type="submit" bsStyle="success">Recover Password</Button> */}
        </form>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  params: PropTypes.object
};
