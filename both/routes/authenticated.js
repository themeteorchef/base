const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  // passing an object so it is easy to extend
  authentication: {
    requireLoggedIn: true,
    redirectPath: '/login'
  }
});

authenticatedRoutes.route( '/', {
  name: 'index',
  action() {
    BlazeLayout.render( 'default', { yield: 'index' } );
  }
});

authenticatedRoutes.route( '/dashboard', {
  name: 'dashboard',
  action() {
    BlazeLayout.render( 'default', { yield: 'dashboard' } );
  }
});
