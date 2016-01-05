const adminRoutes = FlowRouter.group({
  name: 'admin'
});

adminRoutes.route( '/settings', {
  name: 'settings',
  action() {
    BlazeLayout.render( 'default', { yield: 'settings' } );
  }
});
