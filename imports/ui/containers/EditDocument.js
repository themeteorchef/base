import { Meteor } from 'meteor/meteor';
import Documents from '../../api/documents/documents.js';
import EditDocument from '../pages/EditDocument.js';
import composeWithTracker from '../../modules/compose-with-tracker';

const composer = ({ params }, onData) => {
  const subscription = Meteor.subscribe('documents.view', params._id);

  if (subscription.ready()) {
    const doc = Documents.findOne(params._id);
    onData(null, { doc });
  }
};

export default composeWithTracker(composer)(EditDocument);

