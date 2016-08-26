import React from 'react';
import { ButtonGroup, Button, DropdownButton, MenuItem } from 'react-bootstrap';

const options = [
  'Date','Name','Law Firm','Practice','Level','Experience','School',
  'Admitted','Language','Description','City','State','Country','Label'
];

export default Sort = (props) => <span>
  <ButtonGroup>
	<Button
	  componentClass="i"
	  bsClass={`fa fa-arrow-circle-o-${props.upOrDown} fa-2x sortBtn`}
	  onClick={props.ascDescFromSort}
	/>
	<DropdownButton id="bg-nested-dropdown" title={props.selected} onSelect={props.mdataFromSort}>
      {options.map((opt,idx) => <MenuItem key={idx} eventKey={opt} active={(opt==props.selected)}>{opt}</MenuItem>)}
	</DropdownButton>
  </ButtonGroup>
</span>;