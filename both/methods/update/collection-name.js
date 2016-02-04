Meteor.methods({
  update( update ) {
    check( update, String );

    try {
      return Documents.update( update._id, {
        $set: update
      });
    } catch ( exception ) {
      throw new Meteor.Error( '500', `${ exception }` );
    }
  }
});
