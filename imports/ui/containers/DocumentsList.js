import { Meteor } from 'meteor/meteor';
import Documents from '../../api/documents/documents.js';
import DocumentsList from '../components/DocumentsList.js';
import composeWithTracker from '../../modules/compose-with-tracker';

const composer = (props, onData) => {
  const subscription = Meteor.subscribe('documents.list');
  if (subscription.ready()) {
    const documents = Documents.find().fetch();
    onData(null, { documents });
  }
};

export default composeWithTracker(composer)(DocumentsList);

