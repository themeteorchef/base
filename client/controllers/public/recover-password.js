/*
* Controller: Recover Password
* Template: /client/views/public/recover-password.html
*/

/*
* Created
*/

Template.recoverPassword.onCreated(function(){
  // Code to run when template is created goes here.
});

/*
* Rendered
*/


Template.recoverPassword.onRendered(function(){
  $('#application-recover-password').validate({
    rules: {
      emailAddress: {
        required: true,
        email: true
      }
    },
    messages: {
      emailAddress: {
        required: "Please enter your email address to recover your password.",
        email: "Please enter a valid email address."
      }
    },
    submitHandler: function(){
      // Grab the user's email address.
      var email = $('[name="emailAddress"]').val();

      // Call the send reset password email method.
      Accounts.forgotPassword({email: email}, function(error){
        if(error){
          Bert.alert(error.reason, 'danger');
        } else {
          Bert.alert('Check your inbox for a reset link!', 'success');
        }
      });
    }
  });
});

/*
* Helpers
*/

Template.recoverPassword.helpers({
  example: function(){
    // Code to run for helper function.
  }
});

/*
* Events
*/

Template.recoverPassword.events({
  'submit form': function(e){
    // Prevent form from submitting.
    e.preventDefault();
  }
});
