const users = [{
  email: 'admin@admin.com',
  password: 'password',
  profile: {
    name: { first: 'Carl', last: 'Winslow' }
  }
}];

users.forEach( ( { email, password, profile } ) => {
  const userExists = Meteor.users.findOne( { 'emails.address': email } );

  if ( !userExists ) {
    Accounts.createUser({
      email: email,
      password: password,
      profile: profile
    });
  }
});
