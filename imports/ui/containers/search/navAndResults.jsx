import React from 'react';

import { SortAndPages } from './results/sortandpages';
import ResultsList from './results/list';

export const NavAndResults = () => <div id="resultsContainer">
  <SortAndPages />
  <ResultsList />
</div>;