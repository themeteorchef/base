let authenticated = () => {
  return !Meteor.loggingIn() && Meteor.user();
}

let handleRedirect = () => {
  let currentRoute = FlowRouter.current().route;
  let authData = currentRoute.group.options.authentication;
  if (authData.requireLoggedIn ^ authenticated()) {
    FlowRouter.go( authData.redirectPath );
    return false;
  }
  return true;
};

Modules.client.authenticated = authenticated;
Modules.client.handleRedirect = handleRedirect;
