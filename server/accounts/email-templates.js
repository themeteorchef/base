let appName       = 'Application Name',
    appEmail      = `${ appName } <support@application.com>`,
    emailTemplates = Accounts.emailTemplates;

emailTemplates.siteName = appName;
emailTemplates.from     = appEmail;

emailTemplates.resetPassword = {
  subject() {
    return `[${ appName }] Reset Your Password`;
  },
  text( user, url ) {
    let emailAddress   = user.emails[ 0 ].address,
        urlWithoutHash = url.replace( '#/', '' );

    return `A password reset has been requested for the account related to this address (${ emailAddress }). To reset the password, visit the following link:\n\n${ urlWithoutHash }\n\n If you did not request this reset, please ignore this email. If you feel something is wrong, please contact our support team: ${ appEmail }.`;
  }
};
