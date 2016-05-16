import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { Result } from './result';

export const Results = ({results}) => (
  results.length > 0 ? <ListGroup className="resultsList">
    {results.map((result) => (
      <Result key={ result._id } document={ result } />
    ))}
  </ListGroup> :
  <Alert id="resultsAlert" bsStyle="warning">No results yet...</Alert>
);
/*
Results.propTypes = {
  documents: React.PropTypes.array,
};
*/