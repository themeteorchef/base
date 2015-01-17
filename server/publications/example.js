/*
* Publications: Example
* Data publications for the Example collection.
*/

Meteor.publish('examplePublication', function(){
  // If need be, Meteor gives us access to the current user via this.userId.
  // Example below shows using this.userId to locate documents where the
  // owner field is equal to a userId. Additionally, a fields projection is
  // added to specify which fields you want to return (where 1 = true and
  // 0 = false).

  var user = this.userId;
  var data = Example.find({"owner": user}, {fields: {"owner": 1}});

  return data;
});
