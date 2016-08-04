import { Documents } from './documents';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { rateLimit } from '../../modules/rate-limit.js';

export const insertDocument = new ValidatedMethod({
  name: 'documents.insert',
  validate: new SimpleSchema({
    title: { type: String },
  }).validator(),
  run(document) {
    Documents.insert(document);
  },
});

export const updateDocument = new ValidatedMethod({
  name: 'documents.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.title': { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    Documents.update(_id, { $set: update });
  },
});

export const removeDocument = new ValidatedMethod({
  name: 'documents.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Documents.remove(_id);
  },
});

rateLimit({
  methods: [
    insertDocument,
    updateDocument,
    removeDocument,
  ],
  limit: 5,
  timeRange: 1000,
});
