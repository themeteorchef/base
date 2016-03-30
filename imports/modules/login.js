let component;

const _handleLogin = () => {
  // <Input /> component is accessed via nested refs.
  let email    = component.refs.emailAddress.refs.input.value,
      password = component.refs.password.value;

  Meteor.loginWithPassword( email, password, ( error ) => {
    if ( error ) {
      Bert.alert( error.reason, 'warning' );
    } else {
      Bert.alert( 'Logged in!', 'success' );
    }
  });
};

const _validate = () => {
  $( component.refs.login ).validate({
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
    submitHandler() { _handleLogin(); }
  });
};

export const handleLogin = ( options ) => {
  component = options.component;
  _validate();
};
