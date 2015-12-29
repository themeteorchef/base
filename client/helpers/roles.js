Tracker.autorun( function () {
  let userId = Meteor.userId();
  if ( userId && !Roles.userIsInRole( userId, 'user' ) ) {
    Meteor.call( 'addUserToRole', userId, 'user' );
  }
});