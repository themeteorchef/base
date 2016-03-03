Template.registerHelper( 'equals', ( valueOne, valueTwo ) => {
  return valueOne === valueTwo;
});

Template.registerHelper( 'notEqual', ( valueOne, valueTwo ) => {
  return valueOne !== valueTwo;
});

Template.registerHelper( 'or', ( valueOne, valueTwo ) => {
  return valueOne || valueTwo;
});

Template.registerHelper( 'and', function( valueOne, valueTwo ) {
  return valueOne && valueTwo;
});
