Meteor.methods({
  removeBoth( documentId ) {
    check( documentId, String );

    try {
      return Documents.remove( documentId );
    } catch ( exception ) {
      throw new Meteor.Error( '500', `${ exception }` );
    }
  }
});
