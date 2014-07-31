###
    Accounts
    Server side account creation and manipulation methods.

    Configuration:
    - forbidClientAccountCreation: Disallow client side account creation.

    Methods:
    - createUserAccount: Performs a server-side account creation using the Meteor Accounts Password package.
###

# Configuration:
Accounts.config(
    forbidClientAccountCreation: true
)

# Define Methods
Meteor.methods(

    createUserAccount: (user)->

        # Check values against correct pattern.
        pattern = { email: String, password: String }
        check(user, pattern)

        # Create the user.
        Accounts.createUser(user)
)
