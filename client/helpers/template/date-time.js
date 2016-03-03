Template.registerHelper( 'formatDateTime', ( timestamp, format ) => {
  if ( timestamp && format ) {
    return moment( timestamp ).format( format );
  }
});

Template.registerHelper( 'formatDateTimeLocal', ( timestamp, timezone, format ) => {
  if ( timestamp && timezone && format ) {
    return moment( timestamp ).tz( timezone ).format( format );
  }
});
