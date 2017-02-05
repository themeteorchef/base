import React from 'react';

const GraphTest = ({ data }) =>
(!data.loading ? (
  <div className="GraphTest">
    <ul>
      {data.users.map(({ firstName }) => (<li key={ firstName }>{ firstName }</li>))}
    </ul>
    <ul>
      {data.documents.map(({ title }) => (<li key={ title }>{ title }</li>))}
    </ul>
  </div>
) : <div></div>);

GraphTest.propTypes = {
  data: React.PropTypes.object,
};

export default GraphTest;
