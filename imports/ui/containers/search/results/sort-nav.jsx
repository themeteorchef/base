import React from 'react';
import { Grid, Col, Row, Button } from 'react-bootstrap';

import Sort from '../../../components/search/results/sort-nav/sort';
import Nav from '../../../components/search/results/sort-nav/nav';

export default SortNav = (props) => (
<Grid id="sortNavGrid">
  <Col>
	<Row>
	  <div className="spacer" />
	</Row>
	<Row>
	  <Col id="sortCol" xs={8} sm={4}>
		Sort by:
		<Sort
		  selected={props.selected.pri}
		  upOrDown={props.upOrDown.pri}
		  mdataFromSort={props.mdataFromSort.bind(null,'pri')}
		  ascDescFromSort={props.ascDescFromSort.bind(null,'pri')}
		/>
		<Sort
		  selected={props.selected.sec}
		  upOrDown={props.upOrDown.sec}
		  mdataFromSort={props.mdataFromSort.bind(null,'sec')}
		  ascDescFromSort={props.ascDescFromSort.bind(null,'sec')}
		/>
	  </Col>
	  <Col xsHidden={true} sm={6}>
	  	<Nav numbPages={props.numbPages} activePage={props.activePage} pageFromNav={props.pageFromNav} />
	  </Col>
	  <Col xs={4} sm={2}>
<Button>View Removed</Button>
	  </Col>
	</Row>
	<Row>
	  <div className="spacer" />
	</Row>
  </Col>
</Grid>
);