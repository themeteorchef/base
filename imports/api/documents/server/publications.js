import { Documents } from '../documents';

Meteor.publish('documents', () => Documents.find());
