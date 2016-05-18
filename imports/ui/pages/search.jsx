import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { Engine } from '../containers/search/engine';
import { NavAndResults } from '../containers/search/navAndResults';

export const Search = React.createClass({
  getInitialState() {
    return {showResults:false};
  },

  render(){
    return (
	  <Row>
		<Col xs={12}>
		  <Engine onUpdateResults={()=>(this.setState({showResults:true}))}/>
		  {this.state.showResults?<NavAndResults />:''}
		</Col>
	  </Row>
    );
  }
});
