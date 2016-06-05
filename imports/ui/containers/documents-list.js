import { composeWithTracker } from 'react-komposer';
import { Documents } from '../../api/documents/documents.js';
import { DocumentsList } from '../components/documents-list.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('documents');
  if (subscription.ready()) {
    const documents = Documents.find().fetch();
    onData(null, { documents });
  }
};

export default composeWithTracker(composer, Loading)(DocumentsList);
