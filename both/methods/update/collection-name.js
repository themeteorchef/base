Meteor.methods({
  updateBoth( update ) {
    check( update, Object );

    try {
      return Documents.update( update._id, { $set: update } );
    } catch ( exception ) {
      throw new Meteor.Error( '500', `${ exception }` );
    }
  }
});
