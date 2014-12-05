/*
* Reset Password Email Template
* Override Meteor defaults when sending a reset password email.
*/

// Set name and from email.
Accounts.emailTemplates.resetPassword.siteName = "Application Name";
Accounts.emailTemplates.resetPassword.from     = "Application Admin Email <admin@application.com>";

// Set a subject for the reset password email.
Accounts.emailTemplates.resetPassword.subject = function(user){
  return "[Application Name] Reset Your Password";
}

// Set the body of the reset password email.
Accounts.emailTemplates.resetPassword.text = function(user, url){
  var email      = user.emails[0].address,
      removeHash = url.replace('#/', '');
  return "A password reset has been requested for the account related to this address(" + email + "). To reset the password, visit the following link:\n\n" + removeHash + "\n\n If you did not request this reset, please ignore this email. If you feel something is wrong, please contact support: admin@application.com."  
}
