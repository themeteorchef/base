/* eslint-disable no-undef */

import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';
import './validation.js';

let component;

const handleReset = () => {
  const { history, match } = component.props;
  const password = document.querySelector('[name="newPassword"]').value;

  Accounts.resetPassword(match.params.token, password, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      history.push('/');
      Bert.alert('Password reset!', 'success');
    }
  });
};

const validate = () => {
  $(component.resetPasswordForm).validate({
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
    submitHandler() { handleReset(); },
  });
};

export default function handleResetPassword(options) {
  component = options.component;
  validate();
}
