import React from 'react';
import { Alert } from 'react-bootstrap';

const NotFound = () => (
  <Alert bsStyle="danger">
    <p><strong>Error [404]</strong>: { window.location.pathname } does not exist.</p>
  </Alert>
);

export default NotFound;
