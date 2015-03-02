/*
* Methods: Insert - Example
* Example of a method used for inserting into the database.
*/

Meteor.methods({
  exampleInsertMethod: function(argument){
    // Check the argument. Assuming an Object type here.
    check(argument, Object);

    // Perform the insert.
    try {
      var exampleId = Example.insert(argument);
      return exampleId;
    } catch(exception) {
      // If an error occurs, return it to the client.
      return exception;
    }
  }
});
