Template.index.onCreated( () => {
  Template.instance().subscribe( 'template', () => console.log( "Subscribed!" ) );
});
