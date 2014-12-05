/*
* Routes: Authenticated
* Routes that are only visible to authenticated users.
*/

Router.route('index', {
  path: '/',
  template: 'index',
  onBeforeAction: function(){
    // Code to run before route goes here.
    this.next();
  }
});
