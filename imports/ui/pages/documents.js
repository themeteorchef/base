import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DocumentsList from '../containers/documents-list.js';
import { AddDocument } from '../components/add-document.js';

export const Documents = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Documents</h4>
      <AddDocument />
      <DocumentsList />
    </Col>
  </Row>
);
