import { GraphQLList, GraphQLString } from 'graphql';
import { Meteor } from 'meteor/meteor';
import { User } from './types';

export default {
  type: new GraphQLList(User),
  args: {
    _id: {
      name: '_id',
      type: GraphQLString,
    },
    email: {
      name: 'Email Address',
      type: GraphQLString,
    },
  },
  resolve(parent, { _id, email }) {
    const query = {};
    if (_id) query._id = _id;
    if (email) query['emails.address'] = email;
    return Meteor.users.find(query).fetch();
  },
};
