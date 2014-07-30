###
    Controller: Login
    Template: /client/views/public/login.html
###

# Created
Template.login.created = ->
    # Code to run when template is created goes here.

# Rendered
Template.login.rendered = ->
    # Code to run when template is rendered goes here.

# Helpers
Template.login.helpers(
    example: ->
        # Code to run for helper function.
)

# Events
Template.login.events(
    'submit form': (e,t) ->

        # Prevent form from submitting.
        e.preventDefault()

        # Grab the user's details.
        user =
            email: t.find('[name="emailAddress"]').value
            password: t.find('[name="password"]').value

        # Log the user in.
        Meteor.loginWithPassword(user.email, user.password, (error)->
            alert error.reason if error
        )
)
