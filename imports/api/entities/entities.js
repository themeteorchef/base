import { Mongo } from 'meteor/mongo';
//import faker from 'faker';

export const Entities = new Mongo.Collection('entity');
/*
Documents.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the document.',
  },
});

Documents.attachSchema(Documents.schema);
*/
/*
Factory.define('city', Cities, {
  name: () => faker.address.city(),
});
*/