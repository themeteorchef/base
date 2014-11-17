/***************************************************************/
/***************************************************************/
/*  Startup
/*  Collection of methods and functions to run on server startup.
/***************************************************************/
/***************************************************************/

/***************************************************************/
/* Generate Test Accounts */
/***************************************************************/

//Create an array of user accounts.
users = [
  {
    name: "Admin",
    email: "admin@admin.com",
    password: "password"
  }
];

//Loop through array of user accounts.
for (var i = 0, length = users.length; i < length; i++) {
  //Check if the user already exists in the DB.
  user = users[i];
  checkUser = Meteor.users.findOne({
    "emails.address": user.email
  });
  //If an existing user is not found, create the account.
  if (!checkUser) {
    id = Accounts.createUser({
      email: user.email,
      password: user.password,
      profile: {
        name: user.name
      }
    });
  }
}
