const handleRedirect = ( routes, redirect ) => {
	let currentRoute = FlowRouter.getRouteName();
	if ( routes.indexOf( currentRoute ) > -1 ) {
		FlowRouter.go( redirect );
		return true;
	}
};

Template.default.helpers({
	loggingIn() {
		return Meteor.loggingIn();
	},
	authenticated() {
		return !Meteor.loggingIn() && Meteor.user();
	},
	redirectAuthenticated() {
    let forbiddenRoutes = [
      'login',
      'signup',
      'recover-password',
      'reset-password'
    ];
    if ( !Roles.userIsInRole( Meteor.userId() , 'admin' ) ) {
      forbiddenRoutes.push( 'settings' );
    }
	 	return handleRedirect( forbiddenRoutes, '/' );
	},
	redirectPublic() {
		return handleRedirect([
			'index',
			'dashboard',
      'settings'
		], '/login' );
	}
});
