(function(){
  'use strict';

  module.exports = function() {
    var url = require('url');

    this.Given(/^I am an existing user$/, function () {
      this.server.call('fixtures/reset');
      this.server.call('fixtures/seedData');
    });

    this.Given(/^I navigate to "([^"]*)"$/, function (relativePath) {
      this.client.url(url.resolve(process.env.ROOT_URL, relativePath));
      this.browser.waitForExist('nav');
    });

    this.When(/^I enter my email "([^"]*)" and password "([^"]*)"$/, function (email, password) {
      this.client.setValue("[name='emailAddress']", email);
      this.client.setValue("[name='password']", password);
    });

    this.When(/^I submit the form$/, function () {
      this.client.submitForm('form');
    });

    this.Then(/^I should see the message "([^"]*)"$/, function (message) {
      this.client.waitForText('.bert-alert');
      expect(this.browser.getText('.container > p')).toEqual(message);
    });

    this.Then(/^I should see an error and the text "([^"]*)"$/, function (text) {
      this.browser.waitForText('.bert-alert');
      expect(this.browser.getText('.container > p')).toEqual(text);
    });
  }

})();
