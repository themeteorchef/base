import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';

/* Create a default admin user but *only in non-production environments!*
 * This is to avoid a base app being deployed in production with a known generic admin user
 */
if ( !Meteor.isProduction ) {
  const users = [{
    email: 'admin@admin.com',
    password: 'password',
    profile: {
      name: {first: 'Carl', last: 'Winslow'},
    },
    roles: ['admin'],
  }];

  users.forEach(({ email, password, profile, roles }) => {
    const userExists = Meteor.users.findOne({ 'emails.address': email });

    if (!userExists) {
      const userId = Accounts.createUser({ email, password, profile });
      Roles.addUsersToRoles(userId, roles);
    }
  });
}
