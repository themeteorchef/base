import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

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
