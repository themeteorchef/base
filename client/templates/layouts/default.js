Template.default.helpers({
  loggingIn() {
    return Meteor.loggingIn();
  },
  redirectPublic() {
    console.log('publicRedirect');
    return Modules.client.handleRedirect(FlowRouter.current().route);
  },
  redirectAuthenticated() {
    console.log('authenticatedRedirect');
    return Modules.client.handleRedirect(FlowRouter.current().route);
  }
});
