Meteor.methods({
  addUserToRole: function ( userId, role ) {
  	check( userId, String );
  	check( role, String );
  	if ( !Roles.userIsInRole( userId, role ) ) {
    	Roles.addUsersToRoles( userId, role );
    }
  },
});