/*
* Controller: Reset Password
* Template: /client/views/public/reset-password.html
*/

/*
* Created
*/

Template.resetPassword.onCreated(function(){
  // Code to run when template is created goes here.
});

/*
* Rendered
*/

Template.resetPassword.onRendered(function(){
  $('#application-reset-password').validate({
    rules: {
      newPassword: {
        required: true,
        minlength: 6
      },
      repeatNewPassword: {
        required: true,
        minlength: 6,
        equalTo: "[name='newPassword']"
      }
    },
    messages: {
      newPassword: {
        required: "Please enter a new password.",
        minlength: "Please use at least six characters."
      },
      repeatNewPassword: {
        required: "Please repeat your new password.",
        equalTo: "Your password do not match. Please try again."
      }
    },
    submitHandler: function(){
      // Grab the user's reset token and new password.
      var token    = Session.get('resetPasswordToken'),
          password = $('[name="newPassword"]').val();

      // Reset the user's password.
      Accounts.resetPassword(token, password, function(error){
        if(error){
          Bert.alert(error.reason, 'danger');
        } else {
          Bert.alert('Password successfully reset!', 'success');
          Session.set('resetPasswordToken', null);
        }
      });
    }
  });
});

/*
* Helpers
*/

Template.resetPassword.helpers({
  example: function(){
    // Code to run for helper function.
  }
});

/*
* Events
*/

Template.resetPassword.events({
  'submit form': function(e){
    // Prevent form from submitting.
    e.preventDefault();
  }
});
