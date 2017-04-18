import React from 'react';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const handleNav = (history, _id) => {
  history.push(`/documents/${_id}`);
};

const DocumentsList = ({ documents, history }) => {
  return (
    documents.length > 0 ? <ListGroup className="DocumentsList">
      {documents.map(({ _id, title }) => (
        <ListGroupItem key={ _id } onClick={ () => handleNav(history, _id) }>
          { title }
        </ListGroupItem>
      ))}
    </ListGroup> :
    <Alert bsStyle="warning">No documents yet.</Alert>
  );
};

DocumentsList.propTypes = {
  documents: React.PropTypes.array,
};

export default DocumentsList;
