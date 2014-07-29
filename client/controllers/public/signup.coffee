###
    Controller: Signup
    Template: /client/views/public/signup.html
###

# Created
Template.signup.created = ->
    # Code to run when template is created goes here.

# Rendered
Template.signup.rendered = ->
    # Code to run when template is rendered goes here.

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

        # Grab the user's details.
        user =
            email: $('[name="emailAddress"]').val()
            password: $('[name="password"]').val()

        # Create the user's account.
        Accounts.createUser(user, (error)->
            alert error.reason if error
        )
)
