Meteor.publish( 'index', function() {
  return Documents.find();
});
