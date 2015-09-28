Meteor.methods({
	'fixtures/reset': function(){
		Meteor.users.remove({});
	},

	'fixtures/seedData': function(){
		Accounts.createUser({
			email: "test@runner.com",
			password: "password"
		});
	}
});
