let settings       = Meteor.settings.public.application,
    name           = settings.name,
    email          = settings.supportEmail,
    emailTemplates = Accounts.emailTemplates;

emailTemplates.siteName = name;
emailTemplates.from     = `${ name } <${ email }>`;

emailTemplates.resetPassword = {
  subject() {
    return `[${ name }] Reset Your Password`;
  },
  text( user, url ) {
    let emailAddress   = user.emails[ 0 ].address,
        urlWithoutHash = url.replace( '#/', '' ),
        supportEmail   = 'support@application.com',
        emailBody      = `A password reset has been requested for the account related to this address (${emailAddress}). To reset the password, visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this reset, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

    return emailBody;
  }
};
