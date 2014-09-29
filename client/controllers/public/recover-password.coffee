###
  Controller: Recover Password
  Template: /client/views/public/recover-password.html
###

# Created
Template.recoverPassword.created = ->
  # Code to run when template is created goes here.

# Rendered
Template.recoverPassword.rendered = ->
  $('#application-recover-password').validate(
    rules:
      emailAddress:
        required: true
        email: true
    messages:
      emailAddress:
        required: "Please enter your email address to recover your password."
        email: "Please enter a valid email address."
    submitHandler: ->
      # Grab the user's details.
      email = $('[name="emailAddress"]').val()

      # Call the send reset password email method.
      Accounts.forgotPassword(email: email, (error)->
        alert error.reason if error
      )
  )

# Helpers
Template.recoverPassword.helpers(
  example: ->
    # Code to run for helper function.
)

# Events
Template.recoverPassword.events(
  'submit form': (e) ->
    # Prevent form from submitting.
    e.preventDefault()
)
