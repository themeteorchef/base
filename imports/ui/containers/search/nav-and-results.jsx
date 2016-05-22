import React from 'react';

import { SortAndPages } from './results/sort-and-pages';
//import ResultsList from './results/list';
import ResultsList from './results/apollo-provider';

export const NavAndResults = () => <div id="resultsContainer">
  <SortAndPages />
  <ResultsList />
</div>;