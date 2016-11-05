import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import DocumentsList from '../containers/DocumentsList.js';

const Documents = () => (
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">Documents</h4>
          <Button
            bsStyle="success"
            className="pull-right"
            href="/documents/new"
          >New Document</Button>
        </div>
        <DocumentsList />
      </Col>
    </Row>
  </div>
);

export default Documents;
