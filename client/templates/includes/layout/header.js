/***************************************************************/
/***************************************************************/
/*  Controller: Header
/*  Template: /client/includes/_header.html
/***************************************************************/
/***************************************************************/

/***************************************************************/
/* Template States */
/***************************************************************/
/*******************************/
/* Tmpl Created */
/*******************************/
Template.header.created = function() {};

/*******************************/
/* Tmpl Rendered */
/*******************************/
Template.header.rendered = function() {};

//Usermenu/dropmenu needs to be on a seprate tmpl otherwise it will
//not be loaded correctly
Template.userMenu.rendered = function() {
  $('.dropdown').dropdown({transition: 'drop'});
};

/***************************************************************/
/* Helpers */
/***************************************************************/
Template.header.helpers({
  example: function() {}
});

/***************************************************************/
/* Events */
/***************************************************************/
Template.header.events({
  'click .logout': function(e, t) {
    return Meteor.logout(function(error) {
      if (error) {
        return alert(error.reason);
      }
    });
  }
});
