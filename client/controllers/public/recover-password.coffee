###
  Controller: Recover Password
  Template: /client/views/public/recover-password.html
###

# Created
Template.recoverPassword.created = ->
  # Code to run when template is created goes here.

# Rendered
Template.recoverPassword.rendered = ->
  # Code to run when template is rendered goes here.

# Helpers
Template.recoverPassword.helpers(
  example: ->
    # Code to run for helper function.
)

# Events
Template.recoverPassword.events(
  'submit form': (e,t) ->

    # Prevent form from submitting.
    e.preventDefault()

    # Grab the user's details.
    email = t.find('[name="emailAddress"]').value

    # Call the send reset password email method.
    Accounts.forgotPassword(email: email, (error)->
      alert error.reason if error
    )
)
