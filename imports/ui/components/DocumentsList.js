import React from 'react';
import { browserHistory } from 'react-router';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';
import Loading from './Loading';

const handleNav = (_id) => {
  browserHistory.push(`/documents/${_id}`);
};

const renderDocuments = ({ documents }) => (
documents.length > 0 ? <ListGroup className="DocumentsList">
  {documents.map(({ _id, title }) => (
    <ListGroupItem key={ _id } onClick={ () => handleNav(_id) }>
      { title }
    </ListGroupItem>
  ))}
</ListGroup> :
<Alert bsStyle="warning">No documents yet.</Alert>);

const DocumentsList = ({ data }) => (
  !data.loading ? (renderDocuments(data)) : <Loading />
);

DocumentsList.propTypes = {
  data: React.PropTypes.object,
};

export default DocumentsList;
