Router.route('signup', {
  path: '/signup',
  template: 'signup',
  onBeforeAction: function () {
    Session.set('currentRoute', 'signup');
    return this.next();
  }
});

Router.route('login', {
  path: '/login',
  template: 'login',
  onBeforeAction: function() {
    Session.set('currentRoute', 'login');
    return this.next();
  }
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
