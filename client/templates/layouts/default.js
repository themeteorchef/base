const authenticated = () => {
  return !Meteor.loggingIn() && Meteor.user() != null;
}

const handleRedirect = () => {
  FlowRouter.watchPathChange();
  let authData = FlowRouter.current().route.group.options.authentication;
  if ( authData && authData.requireLoggedIn ^ authenticated() ) {
    FlowRouter.go( authData.redirectPath );
    return true;
  }
};

Template.default.helpers({
  loggingIn() {
    return Meteor.loggingIn();
  },
  redirectRequired() {
    return handleRedirect();
  }
});
