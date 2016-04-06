describe( 'Reset Password', function() {
  beforeEach( function() {
    server.execute( function() {
      var user = Meteor.users.findOne( { 'emails.address': 'carl.winslow@abc.com' } );
      if ( user ) { Meteor.users.remove( user._id ); }

      Accounts.createUser({
        email: 'carl.winslow@abc.com',
        password: 'bigguy1989',
        profile: {
          name: { first: 'Carl', last: 'Winslow' }
        }
      });
    });
  });

  it( 'should send a recovery email when we request a reset @watch', function() {
    browser.url( 'http://localhost:3000/recover-password' )
           .setValue( '[name="emailAddress"]', 'carl.winslow@abc.com' )
           .submitForm( 'form' );

    let emails = server.call( 'emailStub/getEmails' );
    console.log( emails[0] ); // Why no value?
    
    // browser.url( 'http://localhost:3000' );
    // browser.execute( function() {
    //   Accounts.onResetPasswordLink( function( token, finished ) {
    //     expect( token ).to.equal( 'blah' );
    //     finished();
    //     done();
    //   });
    // });
  });
});
