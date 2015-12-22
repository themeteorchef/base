let authenticated = () => {
  return !Meteor.loggingIn() && Meteor.user();
}

let handleRedirect = (currentRoute) => {
  let authData = currentRoute.group.options.authentication;
  if (authData.requireLoggedIn ^ authenticated()) {
    FlowRouter.go( authData.redirectPath );
    return true;
  }
  return false;
};

Modules.client.authenticated = authenticated;
Modules.client.handleRedirect = handleRedirect;
