Collection = new Meteor.Collection( 'collection' );

Collection.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Collection.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});
