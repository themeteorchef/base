import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Jumbotron } from 'react-bootstrap';
import DocumentsList from '../containers/DocumentsList.js';

const Documents = (props) => {
  return (
    <div className="Documents">
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
          <DocumentsList {...props} />
        </Col>
      </Row>
    </div>
  );
};

export default Documents;
