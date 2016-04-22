import { ValidatedMethod } from 'meteor/validated-method';
import { Documents } from './documents';

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
