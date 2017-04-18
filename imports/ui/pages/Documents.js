import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Button, Jumbotron } from 'react-bootstrap';
import DocumentsList from '../containers/DocumentsList.js';

const Documents = ({ match }) => (
  <div className="Documents">
    <Jumbotron className="text-center">
      <h2>Document List</h2>
      <p>I should render a document list.</p>
    </Jumbotron>
    {/*
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">Documents</h4>
          <Link to="/documents/new">
            <Button
              bsStyle="success"
              className="pull-right"
            >New Document</Button>
          </Link>
        </div>
        <DocumentsList />
      </Col>
    </Row> */}
  </div>
);

export default Documents;
