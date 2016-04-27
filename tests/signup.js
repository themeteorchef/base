/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */
import { Meteor } from 'meteor/meteor';

describe('Sign Up', function () {
  beforeEach(function () {
    server.execute(function () {
      const user = Meteor.users.findOne({ 'emails.address': 'carl.winslow@abc.com' });
      if (user) {
        Meteor.users.remove(user._id);
      }
    });
  });

  it('should create a new user and login with redirect to index', function () {
    browser.url('http://localhost:3000/signup')
           .setValue('[name="firstName"]', 'Carl')
           .setValue('[name="lastName"]', 'Winslow')
           .setValue('[name="emailAddress"]', 'carl.winslow@abc.com')
           .setValue('[name="password"]', 'bigguy1989')
           .submitForm('form');

    browser.waitForExist('.jumbotron');
    expect(browser.getUrl()).to.equal('http://localhost:3000/');
  });
});
