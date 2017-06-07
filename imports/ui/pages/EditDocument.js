import React from 'react';
import PropTypes from 'prop-types';
import {Meteor} from 'meteor/meteor';
import Documents from '../../api/documents/documents';
import DocumentEditor from '../components/DocumentEditor';
import NotFound from './NotFound';
import container from '../../modules/container';

class EditDocument extends React.Component {
  render() {
    const {doc, handleSnackbarOpen} = this.props;

    if (doc) {
      return (
        <div className="EditDocument">
          <h4 className="page-header">Editing "{doc.title}"</h4>
          <DocumentEditor doc={doc} handleSnackbarOpen={handleSnackbarOpen}/>
        </div>
      )
    } else {
      return (<NotFound/>)
    }
  }
}

EditDocument.propTypes = {
  doc: PropTypes.object,
  handleSnackbarOpen: PropTypes.func
};

export default container((props, onData) => {
  const documentId = props.params._id;
  const subscription = Meteor.subscribe('documents.view', documentId);

  if (subscription.ready()) {
    const doc = Documents.findOne(documentId);
    onData(null, {doc});
  }
}, EditDocument);
