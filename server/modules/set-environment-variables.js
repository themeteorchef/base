let setEnvironmentVariables = () => {
  if ( Meteor.settings.private ) {
    Meteor.settings.private.MAIL_URL = process.env.MAIL_URL;
  }
};

Modules.server.setEnvironmentVariables = setEnvironmentVariables;
