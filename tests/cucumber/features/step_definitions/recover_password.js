(function(){
  'use strict';

  module.exports = function() {
    var url = require('url');

    this.When(/^I enter my email "([^"]*)"$/, function (email) {
      this.client.waitForExist("input[name='emailAddress']");
      this.client.setValue("[name='emailAddress']", email);
    });

    this.Then(/^I should see an email with the correct subject "([^"]*)"$/, function (subject) {
      var emails = server.call('emailStub/getEmails');
      expect(emails.length).toEqual(1);
      var email = emails[0];
      expect(email.subject).toEqual(subject);
    });

    this.When(/^I click the link I should be directed to a password reset form$/, function () {
      var emails = server.call('emailStub/getEmails');
      var verificationLink = emails[0].text.match(/(http|https|www)\S+/)[0];
      this.browser.url(verificationLink);
      expect(this.client.url().value).toEqual(verificationLink);
    });

    this.Then(/^when I enter my new password "([^"]*)"$/, function (newPassword) {
      this.client.setValue("[name='newPassword']", newPassword);
      this.client.setValue("[name='repeatNewPassword']", newPassword);
    });
  }
})();
