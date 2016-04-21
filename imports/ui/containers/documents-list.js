import { composeWithTracker } from 'react-komposer';
import { Documents } from '../../api/documents/documents.js';
import { DocumentsList } from '../components/documents-list.js';
import { Loading } from '../components/loading.js';

const composer = (params, onReady) => {
  const subscription = Meteor.subscribe('documents');
  if (subscription.ready()) {
    const documents = Documents.find().fetch();
    // setTimeout is used to visually buffer the loading spinner so it's not
    // jarring. Can just call onReady directly if you wish :)
    setTimeout(() => { onReady(null, { documents }); }, 500);
  }
};

export default composeWithTracker(composer, Loading)(DocumentsList);
