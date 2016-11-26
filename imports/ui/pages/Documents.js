import React from 'react';
import { browserHistory } from 'react-router';
import { Row, Col, Button } from 'react-bootstrap';
import DocumentsList from '../containers/DocumentsList.js';

const buttonNav = (event) => {
  event.preventDefault();
  browserHistory.push('/documents/new');
}

const Documents = () => (
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">Documents</h4>
          <Button
            bsStyle="success"
            className="pull-right"
            onClick={ buttonNav }
          >New Document</Button>
        </div>
        <DocumentsList />
      </Col>
    </Row>
  </div>
);

export default Documents;
