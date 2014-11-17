Router.route('index', {
  path: '/',
  template: 'index',
  onBeforeAction: function() {
    return this.next();
  }
});
