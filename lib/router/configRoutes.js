/***************************************************************/
/* Global Routes */
/***************************************************************/
Router.configure({
  layoutTemplate: 'LayoutDefault',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'notFound',
});


/***************************************************************/
/* Route Authentication */
/***************************************************************/
Router.route('index', {
  path: '/',
  template: 'index',
  onBeforeAction: function() {
    return this.next();
  }
});