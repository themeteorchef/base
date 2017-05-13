import {browserHistory} from 'react-router';
import {Meteor} from 'meteor/meteor';
import $ from 'jquery';
import 'jquery-validation';

let component;

const login = () => {
  const email = document.querySelector('[name="emailAddress"]').value;
  const password = document.querySelector('[name="password"]').value;
  const {handleSnackbarOpen} = component.props;

  Meteor.loginWithPassword(email, password, (error) => {
    if (error) {
      handleSnackbarOpen(error.reason);
    } else {
      handleSnackbarOpen('Logged in!');

      const {location} = component.props;
      if (location.state && location.state.nextPathname) {
        browserHistory.push(location.state.nextPathname);
      } else {
        browserHistory.push('/');
      }
    }
  });
};

const validate = () => {
  $(component.loginForm).validate({
    rules: {
      emailAddress: {
        required: true,
        email: true
      },
      password: {
        required: true
      }
    },
    messages: {
      emailAddress: {
        required: 'Need an email address here.',
        email: 'Is this email address legit?'
      },
      password: {
        required: 'Need a password here.'
      }
    },
    submitHandler() {
      login();
    }
  });
};

export default function handleLogin(options) {
  component = options.component;
  validate();
}
