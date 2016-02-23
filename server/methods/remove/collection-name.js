Meteor.methods({
  removeServerOnly( documentId ) {
    check( documentId, String );

    try {
      return Documents.remove( documentId );
    } catch ( exception ) {
      throw new Meteor.Error( '500', `${ exception }` );
    }
  }
});
