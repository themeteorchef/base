import { Meteor } from 'meteor/meteor';
import React from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Bert } from 'meteor/themeteorchef:bert';
import Documents from '../../../api/documents/documents';
import { removeDocument } from '../../../api/documents/methods';
import NotFound from './NotFound';
import container from '../../../modules/container';
import Loading from '../components/Loading';

const handleRemove = (history, _id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeDocument.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Document deleted!', 'success');
        history.push('/documents');
      }
    });
  }
};

const ViewDocument = ({ doc, history }) => (
  doc ? (
    <div className="ViewDocument">
      <div className="page-header clearfix">
        <h4 className="pull-left">{ doc && doc.title }</h4>
        <ButtonToolbar className="pull-right">
          <ButtonGroup bsSize="small">
            <Button onClick={() => history.push(`/documents/${doc._id}/edit`)}>Edit</Button>
            <Button onClick={() => handleRemove(history, doc._id)} className="text-danger">Delete</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      { doc && doc.body }
    </div>
  ) : (
    <NotFound />
  )
);

ViewDocument.defaultProps = {
  doc: null,
  history: null,
};

ViewDocument.propTypes = {
  doc: React.PropTypes.object,
  history: PropTypes.object,
};

export default withRouter(container((props, onData) => {
  const documentId = props.match.params._id;
  const subscription = Meteor.subscribe('documents.view', documentId);

  if (subscription.ready()) {
    const doc = Documents.findOne(documentId);
    onData(null, { doc });
  }
}, ViewDocument, { loadingHandler: () => <Loading /> }));

