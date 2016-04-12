import { Documents } from '../documents';

Meteor.publish( 'documents', function() {
  return Documents.find();
});
