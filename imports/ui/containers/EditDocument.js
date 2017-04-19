import { Meteor } from 'meteor/meteor';
import Documents from '../../api/documents/documents.js';
import EditDocument from '../pages/EditDocument.js';
import composeWithTracker from '../../modules/compose-with-tracker';

const composer = (props, onData) => {
  const subscription = Meteor.subscribe('documents.view', props.match.params._id);

  if (subscription.ready()) {
    const document = Documents.findOne(props.match.params._id);
    onData(null, { document });
  }
};

export default composeWithTracker(composer)(EditDocument);
