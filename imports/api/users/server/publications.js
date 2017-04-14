import { Meteor } from 'meteor/meteor';

Meteor.publish('users.info', function userInfoPublish() {
  if (!this.userId) {
    return this.ready();
  }

  return Meteor.users.find({}, {
    fields: {
      name: 1,
    },
  });
});
