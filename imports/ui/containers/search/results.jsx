import React from 'react';

import { SortAndPages } from './results/sortandpages';
import ResultsList from './results/list';

export const Results = () => <div style={{textAlign: 'center'}}>
  <SortAndPages />
  <ResultsList />
</div>;