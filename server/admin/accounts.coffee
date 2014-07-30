###
    Accounts
    Server side account creation and manipulation methods.

    NPM Requires:
    - Fibers (https://www.npmjs.org/package/fibers)
    - Futures (https://www.npmjs.org/package/fibers)

    Configuration:
    - forbidClientAccountCreation: Disallow client side account creation.

    Methods:
    - createUserAccount: Performs a server-side account creation using the Meteor Accounts Password package.
###

# NPM Requires
Future = Npm.require('fibers/future');
Fibers = Npm.require('fibers');

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

        # Define the Future so we can return to the client later.
        createUserAccount = new Future()

        # Run the Timeout function and create the user.
        setTimeout(->

            # Run Meteor code in a Fiber.
            # Note: Accounts.createUser does NOT allow a callback on the server, so we currently
            # cannot check to see if an error took place.
            Fibers(->
                Accounts.createUser(user)
                # Send a faux response back to the client.
                createUserAccount.return({"success": "Account successfully created!"})
            ).run()

        ,300)

        # Wait for the process to complete.
        createUserAccount.wait()
)
