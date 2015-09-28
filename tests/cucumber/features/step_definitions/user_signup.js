(function(){
  'use strict';

  module.exports = function() {
    var url = require('url');

    this.Given(/^I am not an existing user$/, function () {
      this.server.call('fixtures/reset');
    });

    this.Then(/^I should see the form validation error "([^"]*)"$/, function (error) {
      this.client.waitForText('label.error');
      expect(this.browser.getText('label.error')).toEqual(error);
    });
  }
})();
