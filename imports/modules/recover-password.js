/* eslint-disable no-undef */

import {Accounts} from 'meteor/accounts-base';
import './validation.js';

let component;

const handleRecovery = () => {
  const {handleSnackbarOpen} = component.props;

  Accounts.forgotPassword({
    email: document.querySelector('[name="emailAddress"]').value
  }, (error) => {
    if (error) {
      handleSnackbarOpen(error.reason);
    } else {
      handleSnackbarOpen('Check your inbox for a reset link!');
    }
  });
};

const validate = () => {
  $(component.recoverPasswordForm).validate({
    rules: {
      emailAddress: {
        required: true,
        email: true
      }
    },
    messages: {
      emailAddress: {
        required: 'Need an email address here.',
        email: 'Is this email address legit?'
      }
    },
    submitHandler() {
      handleRecovery();
    }
  });
};

export default function handleRecoverPassword(options) {
  component = options.component;
  validate();
}
