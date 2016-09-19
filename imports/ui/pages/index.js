import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import SearchBar from '../components/search-bar';

export const Index = () => (
  <div>
  	<Jumbotron className="text-center">
  	  <h3>Search local powersports deals</h3>
  	<SearchBar />
  	</Jumbotron>
  </div>
);
