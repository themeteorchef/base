/***************************************************************/
/***************************************************************/
/*  Controller: Recover Password
/*  Template: /client/views/public/recover-password.html
/***************************************************************/
/***************************************************************/

/***************************************************************/
/* Template States */
/***************************************************************/
/*******************************/
/* Tmpl Created */
/*******************************/
Template.resetPassword.created = function() {};

/*******************************/
/* Tmpl Rendered */
/*******************************/
Template.recoverPassword.rendered = function() {
  return $('#application-recover-password').validate({
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
    submitHandler: function() {
      var email;
      email = $('[name="emailAddress"]').val();
      return Accounts.forgotPassword({
        email: email
      }, function(error) {
        if (error) {
          return alert(error.reason);
        }
      });
    }
  });
};

/***************************************************************/
/* Helpers */
/***************************************************************/
Template.recoverPassword.helpers({
  example: function() {}
});

/***************************************************************/
/* Events */
/***************************************************************/
Template.recoverPassword.events({
  'submit form': function(e) {
    return e.preventDefault();
  }
});
