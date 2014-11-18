/***************************************************************/
/***************************************************************/
/*  Controller: Login
/*  Template: /client/views/public/login.html
/***************************************************************/
/***************************************************************/

/***************************************************************/
/* Template States */
/***************************************************************/
/*******************************/
/* Tmpl Created */
/*******************************/
Template.login.created = function() {};

/*******************************/
/* Tmpl Rendered */
/*******************************/
Template.login.rendered = function() {
  return $('#application-login').validate({
    rules: {
      emailAddress: {
        required: true,
        email: true
      },
      password: {
        required: true
      }
    },
    highlight: function(element) {
      $(element).parent().addClass("error");
    },
    messages: {
      emailAddress: {
        required: "Please enter your email address to login.",
        email: "Please enter a valid email address."
      },
      password: {
        required: "Please enter your password to login."
      },
    },
  });
};

/***************************************************************/
/* Helpers */
/***************************************************************/
Template.login.helpers({
  example: function() {}
});

/***************************************************************/
/* Events */
/***************************************************************/
Template.login.events({
  'submit #application-login': function(e, tmpl) {
    e.preventDefault();
    var user;
    user = {
      email: tmpl.find('[name="emailAddress"]').value.trim(),
      password: tmpl.find('[name="password"]').value
    };
    console.log(user)
    return Meteor.loginWithPassword(user.email, user.password, function(error) {
      if (error) {
        console.log(error)
        ErrorMessage.insert({errormessage: error});
      }
    });
  },
});