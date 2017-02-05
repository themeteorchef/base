import React from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeDocument } from '../../api/documents/methods.js';

const handleEdit = (_id) => {
  browserHistory.push(`/documents/${_id}/edit`);
}

const handleRemove = (_id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeDocument.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Document deleted!', 'success');
        browserHistory.push('/documents');
      }
    });
  }
};

const ViewDocument = ({ data }) => {
  const { loading } = data;
  const doc = data.documents && data.documents[0];
  return !loading ? (
    <div className="ViewDocument">
      <div className="page-header clearfix">
        <h4 className="pull-left">{ doc && doc.title }</h4>
        <ButtonToolbar className="pull-right">
          <ButtonGroup bsSize="small">
            <Button onClick={ () => handleEdit(doc._id) }>Edit</Button>
            <Button onClick={ () => handleRemove(doc._id) } className="text-danger">Delete</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      { doc && doc.body }
    </div>
  ) : <div></div>;
};

ViewDocument.propTypes = {
  data: React.PropTypes.object,
};

export default ViewDocument;
