/*
* Controller: Login
* Template: /client/views/public/login.html
*/

/*
* Created
*/

Template.login.created = function(){
  // Code to run when template is created goes here.
}

/*
* Rendered
*/

Template.login.rendered = function(){
  $('#application-login').validate({
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
        required: "Please enter your email address to login.",
        email: "Please enter a valid email address."
      },
      password: {
        required: "Please enter your password to login."
      }
    },
    submitHandler: function(){
      // Grab the user's details.
      user = {
        email: $('[name="emailAddress"]').val(),
        password: $('[name="password"]').val()
      }

      // Log the user in.
      Meteor.loginWithPassword(user.email, user.password, function(error){
        if(error){
          alert(error.reason);
        }
      });
    }
  });
}

/*
* Helpers
*/

Template.login.helpers({
  example: function(){
    // Code to run for helper function.
  }
});

/*
* Events
*/

Template.login.events({
  'submit form': function(e){
    // Prevent form from submitting.
    e.preventDefault();
  }
});
