import { GraphQLNonNull, GraphQLString } from 'graphql';
import { Meteor } from 'meteor/meteor';
import { Document } from './types';
import Documents from './documents';
import { sql } from '../../modules/server/mysql.js';

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
      const sets = [];

      if (title) sets.push(`title="${title}"`);
      if (body) sets.push(`body="${body}"`);

      return sql(`UPDATE documents SET ${sets.join(',')} WHERE _id=${_id}`)
      .then(response => response.results)
      .catch((error) => { throw new Meteor.Error('500', error); });
      // return Documents.update(_id, { $set: { title, body } });
    },
  },
};
