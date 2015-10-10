Meteor.methods({
  insertMethod( argument ) {
    check( argument, Object );

    try {
      let documentId = Collection.insert( argument );
      return documentId;
    } catch ( exception ) {
      return exception;
    }
  }
});
