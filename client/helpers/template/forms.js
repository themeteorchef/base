Template.registerHelper( 'selected', ( valueOne, valueTwo ) => {
  return valueOne === valueTwo ? 'selected' : '';
});

Template.registerHelper( 'checked', ( valueOne, valueTwo ) => {
  return valueOne === valueTwo ? 'checked' : '';
});
