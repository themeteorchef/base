import { GraphQLList, GraphQLString } from 'graphql';
import { Meteor } from 'meteor/meteor';
import Documents from './documents';
import { Document } from './types';
import { sql } from '../../modules/server/mysql.js';

export default {
  type: new GraphQLList(Document),
  args: {
    _id: {
      name: '_id',
      type: GraphQLString,
    },
  },
  resolve(parent, query) {
    let sqlQuery = 'SELECT * FROM documents';
    if (typeof query._id !== 'undefined') sqlQuery = `SELECT * FROM documents WHERE _id= ${query._id}`;

    return sql(sqlQuery)
    .then(response => response.results)
    .catch((error) => { throw new Meteor.Error('500', error.reason); });
    // return Documents.find(query).fetch();
  },
};
