import $ from 'jquery';
import 'jquery-validation';
import { browserHistory } from 'react-router';
import { getInputValue } from './get-input-value';

let component;

const _getUserData = () => ({
  email: getInputValue(component, 'emailAddress', true),
  password: getInputValue(component, 'password', true),
  profile: {
    name: {
      first: getInputValue(component, 'firstName', true),
      last: getInputValue(component, 'lastName', true),
    },
  },
});

const _handleSignup = () => {
  const user = _getUserData();

  Accounts.createUser(user, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      browserHistory.push('/');
      Bert.alert('Welcome!', 'success');
    }
  });
};

const _validate = () => {
  $(component.refs.signup).validate({
    rules: {
      firstName: {
        required: true,
      },
      lastName: {
        required: true,
      },
      emailAddress: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 6,
      },
    },
    messages: {
      firstName: {
        required: 'First name?',
      },
      lastName: {
        required: 'Last name?',
      },
      emailAddress: {
        required: 'Need an email address here.',
        email: 'Is this email address legit?',
      },
      password: {
        required: 'Need a password here.',
        minlength: 'Use at least six characters, please.',
      },
    },
    submitHandler() { _handleSignup(); },
  });
};

export const handleSignup = (options) => {
  component = options.component;
  _validate();
};
