import React from 'react';
import { ApolloProvider } from 'react-apollo';

import Client from '../../../../modules/apollo-client';
import Results from '../../../components/search/results/results';

//import { Bios } from '../../../../api/bios/bios';
//import { Jobs } from '../../../../api/jobs/jobs';

//store={Store}
export default ResultsList = () => (
  <ApolloProvider client={Client}>
    <Results />
  </ApolloProvider>
);