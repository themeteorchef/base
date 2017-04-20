import { Meteor } from 'meteor/meteor';
import React from 'react';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Documents from '../../api/documents/documents';
import container from '../../modules/container';
import Loading from '../components/Loading';

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

export default withRouter(container((props, onData) => {
  const subscription = Meteor.subscribe('documents.list');
  if (subscription.ready()) {
    const documents = Documents.find().fetch();
    onData(null, { documents });
  }
}, DocumentsList, { loadingHandler: () => <Loading /> }));

