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
  return $('#register_Form').validate({
    rules: {
      username: {
        required: true,
        minlength: 3,
        maxlength: 15,
      },
      emailAddress: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      },
      cpassword: { 
        required: true, 
        equalTo: "#password", 
        minlength: 6
      }, 
    },
    highlight: function(element) {
      $(element).parent().addClass("error");
    },
    messages: {
      username: {
        required: "Please enter a username to sign up",
        minlength: "Please use at least three characters.",
        maxlength: "You username cannot be 15 characters or longer"
      },
      emailAddress: {
        required: "Please enter your email address to sign up.",
        email: "Please enter a valid email address."
      },
      password: {
        required: "Please enter a password to sign up.",
        minlength: "Please use at least six characters."
      },
      cpassword: {
        required: "Please enter a password to sign up.",
        minlength: "Please use at least six characters.",
        equalTo: "Please enter matching passwords."
      }
    },
  });
};

/***************************************************************/
/* Helpers */
/***************************************************************/
Template.signup.helpers({});

/***************************************************************/
/* Events */
/***************************************************************/
Template.signup.events({
 'submit #register_Form': function (e, tmpl) {
    e.preventDefault();
    //Grab the user reg data
    var registerName = tmpl.find('[name="username"]').value.trim();
    var registerEmail = tmpl.find('[name="emailAddress"]').value.trim();
    var registerPassword = tmpl.find('[name="password"]').value;
    //Put data into obj
    var newUser = {
        username: registerName,
        email: registerEmail,
        password: registerPassword};

    //Added user, checked by shcema
    Accounts.createUser(newUser, function (e) {
      if (e) {
        //Set up your own error messages 
        console.log(e.message)
      }else{
          console.log('User Added');
        }
      });

  }
});