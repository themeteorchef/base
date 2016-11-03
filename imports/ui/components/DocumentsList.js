import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { Document } from './Document.js';

const DocumentsList = ({ documents }) => (
  documents.length > 0 ? <ListGroup className="documents-list">
    {documents.map(doc => (
      <Document key={ doc._id } document={ doc } />
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No documents yet.</Alert>
);

DocumentsList.propTypes = {
  documents: React.PropTypes.array,
};

export default DocumentsList;
