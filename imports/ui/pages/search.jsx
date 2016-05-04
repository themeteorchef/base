import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { Engine } from '../components/search/engine.jsx';
import ResultsList from '../containers/search/results-list.js';

//      <h4 className="page-header">Bios</h4>
export const Search = () => (
  <Row>
    <Col xs={12}>
      <Engine />
      <ResultsList />
    </Col>
  </Row>
);
