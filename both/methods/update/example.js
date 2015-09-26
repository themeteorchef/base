/*
* Methods: Update - Example
* Example of a method used for updating a document in the database.
*/

Meteor.methods({
  exampleUpdateMethod: function(argument){
    // Check the argument. Assuming an Object type here.
    check(argument, Object);

    // Perform the update.
    try {
      var exampleId = Example.update(argument._id, {
        $set: {
          "someKey": argument.someKey
        }
      });
      return exampleId;
    } catch(exception) {
      // If an error occurs, return it to the client.
      return exception;
    }
  }
});
