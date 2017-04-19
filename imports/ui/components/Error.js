import React from 'react';
import { PropTypes } from 'prop-types';

const Error = ({ error }) => (
  <p style={{ color: 'red' }}>
    {error.message}
  </p>
);

Error.defaultProps = {
  error: { message: '' },
};

Error.propTypes = {
  error: PropTypes.object,
};

export default Error;
