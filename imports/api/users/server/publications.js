import { Meteor } from 'meteor/meteor';

Meteor.publish('users.info', () => Meteor.users.find({}, {
  fields: {
    name: 1,
  },
}));
