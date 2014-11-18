/***************************************************************/
/* Public Routes */
/***************************************************************/

Router.route('/signup', {
  name: 'signup.link',
  template: 'signup',
  controller: 'signup_Controller'
});

Router.route('/login', {
  name: 'login.link',
  template: 'login',
  controller: 'login_Controller'
});

Router.route('recover-password', {
  path: '/recover-password',
  template: 'recoverPassword',
  onBeforeAction: function() {
    Session.set('currentRoute', 'recover-password');
    return this.next();
  }
});

Router.route('reset-password', {
  path: '/reset-password/:token',
  template: 'resetPassword',
  onBeforeAction: function() {
    Session.set('currentRoute', 'reset-password');
    Session.set('resetPasswordToken', this.params.token);
    return this.next();
  }
});