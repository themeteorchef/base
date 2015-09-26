/*
* Methods: Read - Example
* Example of a method used for reading from the database.
*/

Meteor.methods({
  exampleReadMethod: function(argument){
    // Check the argument. Assuming a String type here.
    check(argument, String);

    // Perform the read.
    var exampleItem = Example.findOne(argument);

    // If the read fails (no documents found), throw an error.
    if (!exampleItem) {
      throw new Meteor.Error(500, 'Error 500: Not Found', 'No documents found.');
    }

    // Return either the result or the error.
    return exampleItem;
  }
});
