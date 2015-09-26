Template.registerHelper( 'currentRoute', ( route ) => {
  return Session.equals( 'currentRoute', route ) ? 'active' : '';
});
