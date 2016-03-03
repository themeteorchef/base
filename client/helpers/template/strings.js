Template.registerHelper( 'capitalize', ( string ) => {
  if ( string ) {
    return string.charAt( 0 ).toUpperCase() + string.slice( 1 );
  }
});

Template.registerHelper( 'lowercase', ( string ) => {
  if ( string ) {
    return string.toLowerCase();
  }
});

Template.registerHelper( 'parseMarkdown', ( string ) => {
  if ( string && parseMarkdown ) {
    return parseMarkdown( string );
  }
});
