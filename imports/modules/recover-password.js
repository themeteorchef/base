import $ from 'jquery';
import 'jquery-validation';
import { getInputValue } from './get-input-value';

let component;

const _handleRecovery = () => {
  Accounts.forgotPassword({
    email: getInputValue(component, 'emailAddress', true),
  }, (error) => {
    if (error) {
      Bert.alert(error.reason, 'warning');
    } else {
      Bert.alert('Check your inbox for a reset link!', 'success');
    }
  });
};

const _validate = () => {
  $(component.refs.recoverPassword).validate({
    rules: {
      emailAddress: {
        required: true,
        email: true,
      },
    },
    messages: {
      emailAddress: {
        required: 'Need an email address here.',
        email: 'Is this email address legit?',
      },
    },
    submitHandler() { _handleRecovery(); },
  });
};

export const handleRecoverPassword = (options) => {
  component = options.component;
  _validate();
};
