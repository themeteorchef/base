import $ from 'jquery';
import 'jquery-validation';
import { browserHistory } from 'react-router';
import { getInputValue } from './get-input-value';

let component;
let token;

const _handleReset = () => {
  const password = getInputValue(component, 'newPassword', true);
  Accounts.resetPassword(token, password, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      browserHistory.push('/');
      Bert.alert('Password reset!', 'success');
    }
  });
};

const _validate = () => {
  $(component.refs.resetPassword).validate({
    rules: {
      newPassword: {
        required: true,
        minlength: 6,
      },
      repeatNewPassword: {
        required: true,
        minlength: 6,
        equalTo: '[name="newPassword"]',
      },
    },
    messages: {
      newPassword: {
        required: 'Enter a new password, please.',
        minlength: 'Use at least six characters, please.',
      },
      repeatNewPassword: {
        required: 'Repeat your new password, please.',
        equalTo: 'Hmm, your passwords don\'t match. Try again?',
      },
    },
    submitHandler() { _handleReset(); },
  });
};

export const handleResetPassword = (options) => {
  component = options.component;
  token = options.token;
  _validate();
};
