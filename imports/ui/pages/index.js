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
	  	<section>
	  	<div className="container">
	  		<div className="row">
	  			<div className="col-md-8">
	  				<h3>2017 Polaris® GENERAL™ 1000 EPS Deluxe Titanium Matte Metallic</h3>
	  				<img className="img-responsive" src="/2017-polaris-general.jpg"/>
	  			</div>
	  			<div className="col-md-4">
	  				<p className="lead">$17,500</p>
	  				<button>Get a Quote</button>
	  				<button>Call Now</button>
	  			</div>
	  		</div>
	  	</div>
	  	</section>
	  	<ul>
		  	{vehicles.map(({ dealername, make, model }) => {
		  		return <li>{ dealername } - { make } / { model }</li>;
		  	})}
	  	</ul>
	  </div>);
	}
}