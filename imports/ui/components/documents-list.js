import React from 'react';
import { Row, Col, ListGroup, Alert } from 'react-bootstrap';
import { Document } from './document.js';

export const DocumentsList = ({ documents }) => (
  documents.length > 0 ? <ListGroup className="documents-list">
    {documents.map((doc) => (
      <Document key={ doc._id } document={ doc } />
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No documents yet.</Alert>
);
