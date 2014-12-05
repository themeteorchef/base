/*
* Startup
* Collection of methods and functions to run on server startup.
*/

/*
* Generate Test Accounts
* Creates a collection of test accounts automatically on startup.
*/

// Create an array of user accounts.
var users = [
  { name: "Admin", email: "admin@admin.com", password: "password" }
]

// Loop through array of user accounts.
for(i=0; i < users.length; i++){
  // Check if the user already exists in the DB.
  var userEmail = users[i].email,
      checkUser = Meteor.users.findOne({"emails.address": userEmail});

  // If an existing user is not found, create the account.
  if( !checkUser ){
    Accounts.createUser({
      email: userEmail,
      password: users[i].password,
      profile: {
        name: users[i].name
      }
    });
  }
}
