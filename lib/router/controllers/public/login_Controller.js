
login_Controller = RouteController.extend({
  action: function () {
    Session.set('currentRoute', 'login');
    this.render()
  } 
});