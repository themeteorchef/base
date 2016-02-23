import seed from 'meteor/themeteorchef:seeder';

let _seedUsers = () => {
  seed( 'users', {
    environments: [ 'development', 'staging', 'production' ],
    data: [{
      email: 'admin@admin.com',
      password: 'password',
      profile: {
        name: { first: 'Carl', last: 'Winslow' }
      },
      roles: [ 'admin' ]
    }]
  });
};

export default function() {
  _seedUsers();
}
