/*
* Controller: Signup
* Template: /client/views/public/signup.html
*/

/*
* Created
*/

Template.signup.onCreated(function(){
  // Code to run when template is created goes here.
});

/*
* Rendered
*/

Template.signup.onRendered(function(){
  $('#application-signup').validate({
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
    submitHandler: function(){
      // Grab the user's details.
      user = {
        email: $('[name="emailAddress"]').val(),
        password: $('[name="password"]').val()
      }

      // Create the user's account.
      Accounts.createUser({email: user.email, password: user.password}, function(error){
        if(error){
          Bert.alert(error.reason, 'danger');
        } else {
          Bert.alert('Welcome!', 'success');
        }
      });
    }
  });
});

/*
* Helpers
*/

Template.signup.helpers({
  example: function(){
    // Code to run for helper function.
  }
});

/*
* Events
*/

Template.signup.events({
  'submit form': function(e){
    // Prevent form from submitting.
    e.preventDefault();
  }
});
