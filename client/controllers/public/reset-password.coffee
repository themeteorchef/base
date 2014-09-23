###
  Controller: Reset Password
  Template: /client/views/public/reset-password.html
###

# Created
Template.resetPassword.created = ->
  # Code to run when template is created goes here.

# Rendered
Template.resetPassword.rendered = ->
  # Code to run when template is rendered goes here.

# Helpers
Template.resetPassword.helpers(
  example: ->
    # Code to run for helper function.
)

# Events
Template.resetPassword.events(
  'submit form': (e,t) ->

    # Prevent form from submitting.
    e.preventDefault()

    # Grab the user's reset token and new password.
    token    = Session.get 'resetPasswordToken'
    password =
      newPassword: t.find('[name="newPassword"]').value
      repeatPassword: t.find('[name="repeatNewPassword"]').value

    # Call the reset password method if the passwords match.
    if password.newPassword == password.repeatPassword
      Accounts.resetPassword(token, password.newPassword, (error)->
        if error
          alert error.reason
        else
          Session.set 'resetPasswordToken', null
      )
    else
      alert 'Please make sure that your passwords match and try again.'
)
