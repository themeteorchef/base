Meteor.methods({
  updateMethod( argument ) {
    check( argument, Object );

    try {
      let documentId = Collection.update( argument._id, {
        $set: { 'key': argument.key }
      });
      return documentId;
    } catch ( exception ) {
      return exception;
    }
  }
});
