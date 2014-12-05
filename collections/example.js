Example = new Meteor.Collection('example');

/*
* Allow
*/

Example.allow({
  insert: function(userId, doc){
    // Add your rules here.
  },
  update: function(userId, doc, fields, modifier){
    // Add your rules here.
  },
  remove: function(userId, doc){
    // Add your rules here.
  }
});

/*
* Deny
*/

Example.deny({
  insert: function(userId, doc){
    // Add your rules here.
  },
  update: function(userId, doc, fields, modifier){
    // Add your rules here.
  },
  remove: function(userId, doc){
    // Add your rules here.
  }
});
