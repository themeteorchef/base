/***************************************************************/
/***************************************************************/
/*  Controller: Signup
/*  Template: /client/views/public/signup.html
/***************************************************************/
/***************************************************************/

/***************************************************************/
/* Template States */
/***************************************************************/
/*******************************/
/* Tmpl Created */
/*******************************/
Template.signup.created = function() {};

/*******************************/
/* Tmpl Rendered */
/*******************************/
Template.signup.rendered = function() {
  return $('#application-signup').validate({
    rules: {
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
      emailAddress: {
        required: "Please enter your email address to sign up.",
        email: "Please enter a valid email address."
      },
      password: {
        required: "Please enter a password to sign up.",
        minlength: "Please use at least six characters."
      }
    },
    submitHandler: function() {
    //Grab users detials
      var user;
      user = {
        username: $('[name="userName"]').val(),
        email: $('[name="emailAddress"]').val(),
        password: $('[name="password"]').val()
      };
      //Create the users account
      return Accounts.createUser({
        username: user.username,
        email: user.email,
        password: user.password
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
Template.signup.helpers({
  example: function() {}
});

/***************************************************************/
/* Events */
/***************************************************************/
Template.signup.events({
  'submit form': function(e) {
    return e.preventDefault();
  }
});
