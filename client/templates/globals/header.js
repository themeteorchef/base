Template.header.events({
  'click .logout' () {
    Meteor.logout( ( error ) => {
      if ( error ) {
        Bert.alert( error.reason, 'warning' );
      } else {
        Bert.alert( 'Logged out!', 'success' );
        FlowRouter.go( FlowRouter.path( 'login' ) );
        Session.set( 'currentRoute', 'login' );
      }
    });
  }
});
