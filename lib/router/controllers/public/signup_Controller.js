
signup_Controller = RouteController.extend({
  action: function () {
    Session.set('currentRoute', 'signup');
    this.render()
  } 
});