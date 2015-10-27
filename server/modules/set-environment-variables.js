let setEnvironmentVariables = () => {
  process.env.MAIL_URL = Meteor.settings.private.MAIL_URL;
};

Modules.server.setEnvironmentVariables = setEnvironmentVariables;
