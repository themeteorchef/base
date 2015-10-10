let _handleLogin = ( template ) => {
  let email    = template.find( '[name="emailAddress"]' ).value,
      password = template.find( '[name="password"]' ).value;

  Meteor.loginWithPassword( email, password, ( error ) => {
    if ( error ) {
      Bert.alert( error.reason, 'warning' );
    } else {
      Bert.alert( 'Logged in!', 'success' );
    }
  });
};

let validation = ( template ) => {
  return {
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
    submitHandler() { _handleLogin( template ); }
  };
};

let _validate = ( form, template ) => {
  $( form ).validate( validation( template ) );
};

let login = ( options ) => {
  _validate( options.form, options.template );
};

Modules.client.login = login;
