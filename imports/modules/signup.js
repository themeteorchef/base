import {browserHistory} from 'react-router';
import {Accounts} from 'meteor/accounts-base';
import $ from 'jquery';
import 'jquery-validation';

let component;

const getUserData = () => ({
  email: document.querySelector('[name="emailAddress"]').value,
  password: document.querySelector('[name="password"]').value,
  profile: {
    name: {
      first: document.querySelector('[name="firstName"]').value,
      last: document.querySelector('[name="lastName"]').value
    }
  }
});

const signup = () => {
  const user = getUserData();
  const {handleSnackbarOpen} = component.props;

  Accounts.createUser(user, (error) => {
    if (error) {
      handleSnackbarOpen(error.reason);
    } else {
      browserHistory.push('/');
      handleSnackbarOpen('Welcome!');
    }
  });
};

const validate = () => {
  $(component.signupForm).validate({
    rules: {
      firstName: {
        required: true
      },
      lastName: {
        required: true
      },
      emailAddress: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      firstName: {
        required: 'First name?'
      },
      lastName: {
        required: 'Last name?'
      },
      emailAddress: {
        required: 'Need an email address here.',
        email: 'Is this email address legit?'
      },
      password: {
        required: 'Need a password here.',
        minlength: 'Use at least six characters, please.'
      }
    },
    submitHandler() {
      signup();
    }
  });
};

export default function handleSignup(options) {
  component = options.component;
  validate();
}
