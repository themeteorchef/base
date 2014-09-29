###
  Controller: Reset Password
  Template: /client/views/public/reset-password.html
###

# Created
Template.resetPassword.created = ->
  # Code to run when template is created goes here.

# Rendered
Template.resetPassword.rendered = ->
  $('#application-reset-password').validate(
    rules:
      newPassword:
        required: true
        minlength: 6
      repeatNewPassword:
        required: true
        minlength: 6
        equalTo: "[name='newPassword']"
    messages:
      newPassword:
        required: "Please enter a new password."
        minlength: "Please use at least six characters."
      repeatNewPassword:
        required: "Please repeat your new password."
        equalTo: "Your password do not match. Please try again."
    submitHandler: ->
      # Grab the user's reset token and new password.
      token    = Session.get 'resetPasswordToken'
      password =
        newPassword: $('[name="newPassword"]').val()
        repeatPassword: $('[name="repeatNewPassword"]').val()

      # Reset the user's password.
      Accounts.resetPassword(token, password.newPassword, (error)->
        if error
          alert error.reason
        else
          Session.set 'resetPasswordToken', null
      )
  )

# Helpers
Template.resetPassword.helpers(
  example: ->
    # Code to run for helper function.
)

# Events
Template.resetPassword.events(
  'submit form': (e) ->
    # Prevent form from submitting.
    e.preventDefault()
)
