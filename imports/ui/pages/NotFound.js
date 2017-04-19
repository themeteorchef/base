import React from 'react';
import { Alert } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const NotFound = ({ location }) => (
  <div className="NotFound">
    <Alert bsStyle="danger">
      <p><strong>Error [404]</strong>: {location.pathname} does not exist.</p>
    </Alert>
  </div>
);

NotFound.defaultProps = {
  location: null,
};

NotFound.propTypes = {
  location: PropTypes.object,
};

export default withRouter(NotFound);
