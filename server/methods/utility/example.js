/*
* Methods: Utility - Example
* Example of a method used for performing a function on the server.
*/

// Example third-party API stub to call.
// This should be deleted and is only here as an example.
var chipotle = {
  getBurrito: function(burrito){
    return burrito;
  }
}

Meteor.methods({
  exampleUtilityMethod: function(argument){
    // Check the argument. Assuming an Object type here.
    check(argument, Object);

    // Perform the function.
    try {
      var apiCall = chipotle.getBurrito("Barbacoa");
      return apiCall;
    } catch(exception) {
      // If an error occurs, return it to the client.
      return exception;
    }
  }
});
