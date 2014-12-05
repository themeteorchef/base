/*
*  Controller: Header
*  Template: /client/includes/_header.html
*/

/*
* Created
*/

Template.header.created = function(){
  // Code to run when template is created goes here.
}

/*
* Rendered
*/

Template.header.rendered = function() {
  // Code to run when template is rendered goes here.
}

/*
* Helpers
*/

Template.header.helpers({
  example: function(){
    // Code to run for helper function.
  }
});

/*
* Events
*/

Template.header.events({
  'click .logout': function(){
    Meteor.logout(function(error){
      if(error){
        alert(error.reason);
      }
    });
  }
});
