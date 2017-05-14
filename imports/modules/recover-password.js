import {Accounts} from 'meteor/accounts-base';
import $ from 'jquery';
import 'jquery-validation';

let component;

const handleRecovery = () => {
  const {handleSnackbarOpen} = component.props;

  Accounts.forgotPassword({
    email: document.querySelector('[name="emailAddress"]').value
  }, (error) => {
    if (error) {
      handleSnackbarOpen(error.reason, 'error');
    } else {
      handleSnackbarOpen('Check your inbox for a reset link!', 'success');
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
