import { Mongo } from 'meteor/mongo';
//import faker from 'faker';

export const Jobs = new Mongo.Collection('job');
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