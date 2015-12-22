const authenticated = () => {
  return !Meteor.loggingIn() && Meteor.user();
}

const handleRedirect = (currentRoute) => {
  let authData = currentRoute.group.options.authentication;
  if (authData.requireLoggedIn ^ authenticated()) {
    FlowRouter.go( authData.redirectPath );
    return true;
  }
  return false;
};

Template.default.helpers({
  loggingIn() {
    return Meteor.loggingIn();
  },
  authenticated() {
    return authenticated();
  },
  redirectPublic() {
    return handleRedirect(FlowRouter.current().route);
  },
  redirectAuthenticated() {
    return handleRedirect(FlowRouter.current().route);
  }
});
