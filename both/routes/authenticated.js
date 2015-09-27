let authenticated = FlowRouter.group({
  triggersEnter: [ () => {
    if ( !Meteor.loggingIn() && !Meteor.userId() ) {
      FlowRouter.go( 'login' );
      Session.set( 'currentRoute', 'login' );
    }
  }]
});

authenticated.route( '/', {
  name: 'index',
  triggersEnter: [ () => {
    Session.set( 'currentRoute', 'index' );
  }],
  action() {
    BlazeLayout.render( 'default', { yield: 'index' } );
  }
});
