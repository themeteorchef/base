/*
* Routes: Authenticated
* Routes that are only visible to authenticated users.
*/

Router.route('index', {
  path: '/',
  template: 'index',
  subscriptions: function(){
    return Meteor.subscribe('examplePublication');
    /* 
    return [
      Meteor.subscribe('examplePublication'),
      Meteor.subscribe('examplePublication2')
    ];
    */
  },
  onBeforeAction: function(){
    // Code to run before route goes here.
    this.next();
  }
});
