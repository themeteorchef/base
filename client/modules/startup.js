let startup = () => {
  
  Template.registerHelper('authentication', () => {
    return Modules.client.handleRedirect();
  });
  
};

Modules.client.startup = startup;
