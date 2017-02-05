import { GraphQLObjectType, GraphQLString } from 'graphql';

export const Document = new GraphQLObjectType({
  name: 'Document',
  description: 'GraphQL Type for a document.',
  fields: () => ({
    _id: { type: GraphQLString },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
  }),
});
