import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';

import { Criteria } from '../../../modules/search';

import { Mdata } from './cols/mdata.jsx';
import { Data } from './cols/data.jsx';

export const Engine = React.createClass({
  render() {
    return <div>
      <Grid>
        <Row>
          <Col sm={4} id="outerCol"><Mdata /></Col>
          <Col sm={4}><Data /></Col>
          <Col sm={4}><code>Col 3</code></Col>
        </Row>
      </Grid>
    </div>;
  },
});