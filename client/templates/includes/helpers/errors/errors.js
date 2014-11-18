/***************************************************************/
/* Local Error Collection */
/***************************************************************/
//Establish local collection
ErrorMessage = new Mongo.Collection(null);


/***************************************************************/
/* Helper */
/***************************************************************/
Template.ErrorMessage.helpers({
  Error: function () {
    //Controls error handeling
    //Only one error will be displayed at a time
    var errorCount = ErrorMessage.find().count();
    if (errorCount === 0) {
      return false
    }else if (errorCount === 1){
      var currentError = ErrorMessage.find().fetch()[0]
      return [currentError];
    }else{
      var oldError = ErrorMessage.find().fetch()[0]
      ErrorMessage.remove({_id: oldError._id});
    }
  }
});

/***************************************************************/
/* Events */
/***************************************************************/
Template.ErrorMessage.events({
  'click .close': function () {
    //Message fadeout upon x click
    $('.message').fadeOut();
    //Remove error message
    var oldError = ErrorMessage.find().fetch()[0]
    ErrorMessage.remove({_id: oldError._id});
  }
});