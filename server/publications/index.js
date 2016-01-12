Meteor.publish( 'index', function() {
  return Collection.find( { 'owner': this.userId }, { fields: { 'owner': 1 } } );
});
