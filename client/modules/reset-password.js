let resetPassword = ( options ) => {
  _validate( options.form, options.template );
};

let _validate = ( form, template ) => {
  $( form ).validate( validation( template ) );
};

let validation = ( template ) => {
  return {
    rules: {
      newPassword: {
        required: true,
        minlength: 6
      },
      repeatNewPassword: {
        required: true,
        minlength: 6,
        equalTo: '[name="newPassword"]'
      }
    },
    messages: {
      newPassword: {
        required: "Enter a new password, please.",
        minlength: "Use at least six characters, please."
      },
      repeatNewPassword: {
        required: "Repeat your new password, please.",
        equalTo: "Hmm, your passwords don't match. Try again?"
      }
    },
    submitHandler() { _handleReset( template ); }
  };
};

let _handleReset = ( template ) => {
  var token    = FlowRouter.current().params.token,
      password = template.find( '[name="newPassword"]' ).value;

  Accounts.resetPassword( token, password, ( error ) => {
    if ( error ) {
      Bert.alert( error.reason, 'danger' );
    } else {
      Bert.alert( 'Password reset!', 'success' );
    }
  });
};

Modules.client.resetPassword = resetPassword;
