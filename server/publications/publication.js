Meteor.publish( 'publication', function() {
  return Collection.find( { 'owner': this.userId }, { fields: { 'owner': 1 } } );
});
