let publicRoutes = FlowRouter.group({
  triggersEnter: [ () => {
    if ( Meteor.userId() ) {
      FlowRouter.go( 'index' );
      Session.set( 'currentRoute', 'index' );
    }
  }]
});

publicRoutes.route( '/signup', {
  name: 'signup',
  triggersEnter: [ () => {
    Session.set( 'currentRoute', 'signup' );
  }],
  action() {
    BlazeLayout.render( 'default', { yield: 'signup' } );
  }
});

publicRoutes.route( '/login', {
  name: 'login',
  triggersEnter: [ () => {
    Session.set( 'currentRoute', 'login' );
  }],
  action() {
    BlazeLayout.render( 'default', { yield: 'login' } );
  }
});

publicRoutes.route( '/recover-password', {
  name: 'recover-password',
  triggersEnter: [ () => {
    Session.set( 'currentRoute', 'recover-password' );
  }],
  action() {
    BlazeLayout.render( 'default', { yield: 'recoverPassword' } );
  }
});

publicRoutes.route( '/reset-password/:token', {
  name: 'reset-password',
  triggersEnter: [ () => {
    Session.set( 'currentRoute', 'reset-password' );
  }],
  action() {
    BlazeLayout.render( 'default', { yield: 'resetPassword' } );
  }
});
