Meteor.methods({
  readMethod( argument ) {
    check( argument, String );

    let document = Collection.findOne( argument );

    if ( !document ) {
      throw new Meteor.Error( 'document-not-found', 'No documents found matching this query.' );
    }

    return document;
  }
});
