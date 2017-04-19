import React from 'react';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const DocumentsList = ({ documents, history }) => (
  documents.length > 0 ? <ListGroup className="DocumentsList">
    {documents.map(({ _id, title }) => (
      <ListGroupItem key={_id} onClick={() => history.push(`/documents/${_id}`)}>
        { title }
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No documents yet.</Alert>
);


DocumentsList.defaultProps = {
  documents: [],
  history: null,
};

DocumentsList.propTypes = {
  documents: PropTypes.array,
  history: PropTypes.object,
};

export default withRouter(DocumentsList);
