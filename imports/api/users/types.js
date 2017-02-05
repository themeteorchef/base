import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

export const User = new GraphQLObjectType({
  name: 'User',
  description: 'GraphQL Type for a user.',
  fields: () => ({
    _id: { type: GraphQLString },
    fullName: {
      type: new GraphQLNonNull(GraphQLString),
      resolve(user) {
        return `${user.profile.name.first} ${user.profile.name.last}`;
      },
    },
    emailAddress: {
      type: new GraphQLNonNull(GraphQLString),
      resolve(user) {
        return user.emails[0].address;
      },
    },
  }),
});
