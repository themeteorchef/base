import React from 'react';
import { Row, Col, ListGroupItem, Label } from 'react-bootstrap';

export const Result = (doc) => (
  <ListGroupItem header={doc.result._id._str} href="#">
Law Firm
  </ListGroupItem>
);
