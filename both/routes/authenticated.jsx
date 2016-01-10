const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated'
});

authenticatedRoutes.route( '/', {
  name: 'index',
  action() {
    ReactLayout.render( App, { yield: <Index /> } );
    // BlazeLayout.render( 'default', { yield: 'index' } );
  }
});

authenticatedRoutes.route( '/dashboard', {
  name: 'dashboard',
  action() {
    ReactLayout.render( App, { yield: <Dashboard /> } );
    // BlazeLayout.render( 'default', { yield: 'dashboard' } );
  }
});
