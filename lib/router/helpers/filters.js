/***************************************************************/
/***************************************************************/
/*  Route Filters
/*  Filters for managing user access to application routes.
/***************************************************************/
/***************************************************************/
/*Filter: Check if a User is Logged In
  If a user is not logged in and attempts to go to an authenticated route,
  re-route them to the login screen.
*/

var checkUserLoggedIn, userAuthenticated;

checkUserLoggedIn = function() {
  if (!Meteor.loggingIn() && !Meteor.user()) {
    return Router.go('/login');
  } else {
    return this.next();
  }
};


/*Filter: Check if a User Exists
  If a user is logged in and attempts to go to a public route, re-route
  them to the main "logged in" screen.
*/
userAuthenticated = function() {
  if (!Meteor.loggingIn() && Meteor.user()) {
    return Router.go('/');
  } else {
    return this.next();
  }
};

Router.onBeforeAction(checkUserLoggedIn, {
  except: [
  'signup.link', 
  'login.link', 
  'recover-password', 
  'reset-password']
});

Router.onBeforeAction(userAuthenticated, {
  only: [
  'signup.link', 
  'login.link', 
  'recover-password', 
  'reset-password']
});
