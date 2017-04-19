/* eslint-disable no-undef */

import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import './validation.js';

let component;

const login = () => {
  const email = document.querySelector('[name="emailAddress"]').value;
  const password = document.querySelector('[name="password"]').value;

  Meteor.loginWithPassword(email, password, (error) => {
    if (error) {
      Bert.alert(error.reason, 'warning');
    } else {
      Bert.alert('Logged in!', 'success');

      const { location, history } = component.props;
      if (location.state && location.state.nextPathname) {
        history.push(location.state.nextPathname);
      } else {
        history.push('/');
      }
    }
  });
};

const validate = () => {
  $(component.loginForm).validate({
    rules: {
      emailAddress: {
        required: true,
        email: true,
      },
      password: {
        required: true,
      },
    },
    messages: {
      emailAddress: {
        required: 'Need an email address here.',
        email: 'Is this email address legit?',
      },
      password: {
        required: 'Need a password here.',
      },
    },
    submitHandler() { login(); },
  });
};

export default function handleLogin(options) {
  component = options.component;
  validate();
}
