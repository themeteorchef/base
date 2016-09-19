import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import SearchBar from '../components/search-bar';

export class Index extends React.Component {
	constructor(props) {
		super(props);
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(event) {
		const { query } = this.props;
		query.set(event.target.value);
	}

	render() {
		const { vehicles } = this.props;
		return (<div>
	  	<Jumbotron className="text-center">
	  	  <h3>Search local powersports deals</h3>

	  		<input type="search" name="search" onKeyUp={ this.handleSearch } className="form-control" />
	  	</Jumbotron>
	  	<ul>
		  	{vehicles.map(({ dealername, make, model }) => {
		  		return <li>{ dealername } - { make } / { model }</li>;
		  	})}
	  	</ul>
	  </div>);
	}
}

// export const Index = ({ vehicles, query }) => (
//   <div>
//   	<Jumbotron className="text-center">
//   	  <h3>Search local powersports deals</h3>
//   	<SearchBar />
//   	</Jumbotron>
//   	<ul>
// 	  	{vehicles.map(({ dealername, make, model }) => {
// 	  		return <li>{ dealername } - { make } / { model }</li>;
// 	  	})}
//   	</ul>
//   </div>
// );
