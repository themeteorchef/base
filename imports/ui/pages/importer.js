import React from 'react';
import { Meteor } from 'meteor/meteor';

export class Importer extends React.Component {
	constructor(props) {
		super(props);
		this.handleFileUpload = this.handleFileUpload.bind(this);
	}

	handleFileUpload(event) {
		const file = event.target.files[0];
		const reader = new FileReader();

		reader.onload = function(event) {
			console.log(event.target.result);
			Meteor.call('importVehicles', event.target.result, (error) => {
				if (error) console.warn(error);
			});
		}

		reader.readAsText(file);
	}


	render() {
		return (<div>
			<h3>Upload XML File</h3>
			<input type="file" name="importer" onChange={ this.handleFileUpload } />
		</div>);
	}
}
