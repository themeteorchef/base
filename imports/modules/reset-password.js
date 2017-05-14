import {browserHistory} from 'react-router';
import {Accounts} from 'meteor/accounts-base';
import $ from 'jquery';
import 'jquery-validation';

let component;
let token;

const handleReset = () => {
  const password = document.querySelector('[name="newPassword"]').value;
  const {handleSnackbarOpen} = component.props;

  Accounts.resetPassword(token, password, (error) => {
    if (error) {
      handleSnackbarOpen(error.reason, 'error');
    } else {
      browserHistory.push('/');
      handleSnackbarOpen('Password reset!', 'success');
    }
  });
};

const validate = () => {
  $(component.resetPasswordForm).validate({
    rules: {
      newPassword: {
        required: true,
        minlength: 6
      },
      repeatNewPassword: {
        required: true,
        minlength: 6,
        equalTo: '[name="newPassword"]'
      }
    },
    messages: {
      newPassword: {
        required: 'Enter a new password, please.',
        minlength: 'Use at least six characters, please.'
      },
      repeatNewPassword: {
        required: 'Repeat your new password, please.',
        equalTo: 'Hmm, your passwords don\'t match. Try again?'
      }
    },
    submitHandler() {
      handleReset();
    }
  });
};

export default function handleResetPassword(options) {
  component = options.component;
  token = options.token;
  validate();
}
