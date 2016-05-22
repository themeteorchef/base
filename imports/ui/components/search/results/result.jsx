import React from 'react';
import { Row, Col, ListGroupItem, Label } from 'react-bootstrap';

export const Result = (bioOrJob) => (
  <ListGroupItem header={JSON.parse(bioOrJob.result.doc).full_name[1]} href="#">
Law Firm
  </ListGroupItem>
);
