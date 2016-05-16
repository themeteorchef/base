import React from 'react';
import { ButtonToolbar, Button, Glyphicon } from 'react-bootstrap';

export const Third = (props) => <div>
  <div className="spacer" />
  <div id="criteriaContainer">
	{Object.keys(props.criteria).map((mdata) => {
	  let data = props.criteria[mdata];

	  if(mdata=='Date')
console.log(data);
	  else if(mdata=='Experience')
console.log(data);
	  else if(typeof(data)=='object')
	  	data = data.join(', ');

	  return <div key={mdata}>
		<p><span className="mdata">{mdata}: </span>{data}</p>
		<div className="spacer" />
	  </div>;
	})}
  </div>
  <ButtonToolbar id="btnToolbar">
	<Button bsStyle={props.btnStyle} onClick={props.updateResults}><Glyphicon glyph="pencil" />Update Results</Button>
	<Button bsStyle="link">Save Search</Button>
	<Button bsStyle="link">Cross Search</Button>
  </ButtonToolbar>
</div>;