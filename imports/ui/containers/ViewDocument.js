import { Meteor } from 'meteor/meteor';
import Documents from '../../api/documents/documents.js';
import ViewDocument from '../pages/ViewDocument.js';
import composeWithTracker from '../../modules/compose-with-tracker';

const composer = (props, onData) => {
  const subscription = Meteor.subscribe('documents.view', props.match.params._id);

  if (subscription.ready()) {
    const doc = Documents.findOne(props.match.params._id);
    onData(null, { ...props, doc });
  }
};

export default composeWithTracker(composer)(ViewDocument);

