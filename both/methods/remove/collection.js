Meteor.methods({
  removeMethod( argument ) {
    check( argument, String );

    try {
      Collection.remove( argument );
    } catch( exception ) {
      return exception;
    }
  }
});
