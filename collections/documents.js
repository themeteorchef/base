Documents = new Mongo.Collection( 'documents' );

Documents.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Documents.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let DocumentsSchema = new SimpleSchema({
  'title': {
    type: String,
    label: 'The title of this document.'
  }
});

Documents.attachSchema( DocumentsSchema );
