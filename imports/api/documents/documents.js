import { Mongo } from 'meteor/mongo';
import faker from 'faker';

export const Documents = new Mongo.Collection('Documents');

Documents.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the document.',
  },
});

Documents.attachSchema(Documents.schema);

Factory.define('document', Documents, {
  title: () => faker.hacker.phrase(),
});
