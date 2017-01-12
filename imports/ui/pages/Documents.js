import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import DocumentsList from '../containers/DocumentsList.js';

const Documents = () => (
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">Documents</h4>
          <LinkContainer to="/documents/new">
              <Button
                bsStyle="success"
                className="pull-right"
              >New Document</Button>
          </LinkContainer>
        </div>
        <DocumentsList />
      </Col>
    </Row>
  </div>
);

export default Documents;
