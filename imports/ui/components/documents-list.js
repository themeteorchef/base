import React from 'react';
import { Row, Col, ListGroup, ListGroupItem, Input, Button, Alert } from 'react-bootstrap';
import { updateDocument, removeDocument } from '../../api/documents/methods.js';

const handleUpdateDocument = ( documentId, event ) => {
  const title = event.target.value.trim();
  if ( title !== '' && event.keyCode === 13 ) {
    updateDocument.call({
      _id: documentId,
      update: { title: title }
    }, ( error, response ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      }
    });
  }
};

const handleRemoveDocument = ( documentId, event ) => {
  event.preventDefault();
  if ( confirm( 'Are you sure? This is permanent.' ) ) {
    removeDocument.call({
      _id: documentId
    }, ( error, response ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        Bert.alert( 'Document removed!', 'success' );
      }
    });
  }
};

export const DocumentsList = ( { documents } ) => {
  if ( documents.length > 0 ) {
    return <ListGroup className="documents-list">
      {documents.map( ( { _id, title } ) => {
        return <ListGroupItem key={ _id }>
          <Row>
            <Col xs={ 8 } sm={ 10 }>
              <Input
                type="text"
                standalone
                defaultValue={ title }
                onKeyUp={ handleUpdateDocument.bind( this, _id ) }
              />
            </Col>
            <Col xs={ 4 } sm={ 2 }>
              <Button
                bsStyle="danger"
                className="btn-block"
                onClick={ handleRemoveDocument.bind( this, _id ) }>
                Remove
              </Button>
            </Col>
          </Row>
        </ListGroupItem>;
      })}
    </ListGroup>;
  } else {
    return <Alert bsStyle="warning">No documents yet.</Alert>;
  }
};
