import $ from 'jquery';
import 'jquery-validation';
import { browserHistory } from 'react-router';

let component;

const _handleLogin = () => {
  // <Input /> component value is accessed via nested refs.
  const email = component.refs.emailAddress.refs.input.value;
  const password = component.refs.password.value;

  Meteor.loginWithPassword(email, password, (error) => {
    if (error) {
      Bert.alert(error.reason, 'warning');
    } else {
      Bert.alert('Logged in!', 'success');

      const { location } = component.props;
      if (location.state && location.state.nextPathname) {
        browserHistory.push(location.state.nextPathname);
      } else {
        browserHistory.push('/');
      }
    }
  });
};

const _validate = () => {
  $(component.refs.login).validate({
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
    submitHandler() { _handleLogin(); },
  });
};

export const handleLogin = (options) => {
  component = options.component;
  _validate();
};
