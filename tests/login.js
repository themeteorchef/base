/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

describe('Log In', function () {
  beforeEach(function () {
    server.execute(function () {
      const user = Meteor.users.findOne({ 'emails.address': 'carl.winslow@abc.com' });
      if (user) {
        Meteor.users.remove(user._id);
      }
    });
  });

  it('should allow us to login', function () {
    server.execute(function () {
      Accounts.createUser({
        email: 'carl.winslow@abc.com',
        password: 'bigguy1989',
        profile: {
          name: { first: 'Carl', last: 'Winslow' },
        },
      });
    });

    browser.url('http://localhost:3000/login')
           .setValue('[name="emailAddress"]', 'carl.winslow@abc.com')
           .setValue('[name="password"]', 'bigguy1989')
           .submitForm('form');

    browser.waitForExist('.jumbotron');
    expect(browser.getUrl()).to.equal('http://localhost:3000/');
  });
});
