import React from 'react';
import { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';



class SearchBar extends Component {
	render() {
		return (
			<div>
				<form>
					<FormGroup>
						<FormControl 
							type="text"
						/>
					</FormGroup>
				</form>
			</div>
		);
	}
};

export default SearchBar;