/*
* Route Hooks
* Hook functions for managing user access to routes.
*/

/*
* Define Hook Functions
*/

/*
* Hook: Check if a User is Logged In
* If a user is not logged in and attempts to go to an authenticated route,
* re-route them to the login screen.
*/

checkUserLoggedIn = function(){
  if( !Meteor.loggingIn() && !Meteor.user() ) {
    Router.go('/login');
  } else {
    this.next();
  }
}

/*
* Hook: Check if a User Exists
* If a user is logged in and attempts to go to a public route, re-route
* them to the index path.
*/

userAuthenticated = function(){
  if( !Meteor.loggingIn() && Meteor.user() ){
    Router.go('/');
  } else {
    this.next();
  }
}

/*
* Run Hooks
*/

Router.onBeforeAction(checkUserLoggedIn, {
  except: [
    'signup',
    'login',
    'recover-password',
    'reset-password'
  ]
});

Router.onBeforeAction(userAuthenticated, {
  only: [
    'signup',
    'login',
    'recover-password',
    'reset-password'
  ]
});
