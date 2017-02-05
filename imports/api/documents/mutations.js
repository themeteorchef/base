import { GraphQLNonNull, GraphQLString } from 'graphql';
import { Document } from './types';
import Documents from './documents';

export default {
  createDocument: {
    type: Document,
    args: {
      title: { type: new GraphQLNonNull(GraphQLString) },
      body: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(source, args) {
      return Documents.insert(args);
    },
  },
  updateDocument: {
    type: Document,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      title: { type: new GraphQLNonNull(GraphQLString) },
      body: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(source, { _id, title, body }) {
      return Documents.update(_id, { $set: { title, body } });
    },
  },
};
