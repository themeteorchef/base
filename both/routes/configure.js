FlowRouter.notFound = {
  action() {
    BlazeLayout.render( 'default', { yield: 'notFound' } );
  }
};
