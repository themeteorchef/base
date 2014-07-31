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
    'submit form': (e,t) ->

        # Prevent form from submitting.
        e.preventDefault()

        # Grab the user's details.
        user =
            email: t.find('[name="emailAddress"]').value
            password: t.find('[name="password"]').value

        # Create the user's account.
        Meteor.call 'createUserAccount', user, (error) ->

            # If the account is created successfully, log the user in using the credentials
            # from above.
            if error
                alert error.reason
            else
                Meteor.loginWithPassword(user.email, user.password, (error)->
                    alert error.reason if error
                )

)
