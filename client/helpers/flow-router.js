let pathFor = ( path, view ) => {
  if ( path.hash ) {
    view = path;
    path = view.hash.route;
    delete view.hash.route;
  }

  let query = view.hash.query ? FlowRouter._qs.parse( view.hash.query ) : {};
  return FlowRouter.path( path, view.hash, query );
};

Template.registerHelper( 'pathFor', pathFor );

Template.registerHelper( 'urlFor', ( path, view ) => {
  return Meteor.absoluteUrl( pathFor( path, view ).substr( 1 ) );
});
