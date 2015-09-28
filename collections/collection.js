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

let CollectionSchema = new SimpleSchema({
  "owner": {
    type: String,
    label: "The ID of the owner of this document."
  }
});

Collection.attachSchema( CollectionSchema );
