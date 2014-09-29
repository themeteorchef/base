###
  Controller: Signup
  Template: /client/views/public/signup.html
###

# Created
Template.signup.created = ->
  # Code to run when template is created goes here.

# Rendered
Template.signup.rendered = ->
  $('#application-signup').validate(
    rules:
      emailAddress:
        required: true
        email: true
      password:
        required: true
        minlength: 6
    messages:
      emailAddress:
        required: "Please enter your email address to sign up."
        email: "Please enter a valid email address."
      password:
        required: "Please enter a password to sign up."
        minlength: "Please use at least six characters."
    submitHandler: ->
      # Grab the user's details.
      user =
          email: $('[name="emailAddress"]').val()
          password: $('[name="password"]').val()

      # Create the user's account.
      Accounts.createUser({email: user.email, password: user.password}, (error)->
        alert error.reason if error
      )
  )

# Helpers
Template.signup.helpers(
  example: ->
    # Code to run for helper function.
)

# Events
Template.signup.events(
  'submit form': (e) ->
    # Prevent form from submitting.
    e.preventDefault()
)
