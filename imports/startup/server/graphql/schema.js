import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import { Meteor } from 'meteor/meteor';
import Documents from '/imports/api/documents/documents';

const Document = new GraphQLObjectType({
  name: 'Document',
  description: 'GraphQL Type for a document.',
  fields: () => ({
    _id: { type: GraphQLString },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
  }),
});

const Users = new GraphQLObjectType({
  name: 'User',
  description: 'GraphQL Type for a user.',
  fields: () => ({
    _id: { type: GraphQLString },
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
      resolve(user) {
        return user.profile.name.first;
      },
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
      resolve(user) {
        return user.profile.name.last;
      },
    },
    fullName: {
      type: new GraphQLNonNull(GraphQLString),
      resolve(user) {
        return `${user.profile.name.first} ${user.profile.name.last}`;
      },
    },
  }),
});

const Query = new GraphQLObjectType({
  name: 'ApplicationSchema',
  description: 'Schema for the application.',
  fields: {
    documents: {
      type: new GraphQLList(Document),
      args: {
        title: {
          name: 'title',
          type: GraphQLString,
        },
        _id: {
          name: '_id',
          type: GraphQLString,
        },
      },
      resolve(parent, query) {
        return Documents.find(query).fetch();
      },
    },
    users: {
      type: new GraphQLList(Users),
      args: {
        _id: {
          name: '_id',
          type: GraphQLString,
        },
      },
      resolve(parent, query) {
        return Meteor.users.find(query).fetch();
      },
    },
  },
});

export default new GraphQLSchema({
  query: Query,
});
