import React from 'react';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import handleRecoverPassword from '../../modules/recover-password';

export default class RecoverPassword extends React.Component {
  componentDidMount() {
    handleRecoverPassword({component: this});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-8 col-lg-6">
          <h2>Recover Password</h2>
          <Divider/>
          <br/>
          Enter your email address below to receive a link to reset your password.
          <form ref={form => (this.recoverPasswordForm = form)} className="recover-password" onSubmit={this.handleSubmit}>
            <TextField name="emailAddress" hintText="user@example.com" floatingLabelText="Email Address" fullWidth={true}/>
            <div>
              <RaisedButton label="Recover Password" type="submit" labelPosition="before" primary={true} icon={< FontIcon className = "fa fa-key" />}/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
