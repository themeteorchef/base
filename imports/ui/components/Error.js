import React, { PropTypes } from 'react';

const Error = ({ error }) => (
  <p style={{ color: 'red' }}>
    {error.message}
  </p>
);

Error.propTypes = {
  error: PropTypes.object,
};

Error.defaultProps = {
  error: { message: '' },
};

export default Error;
