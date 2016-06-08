import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Engine from '../containers/search/engine';
import ApolloResults from '../containers/search/results';

export const Search = React.createClass({
  getInitialState() {
    return {showResults:false};
  },

  render(){
    return (
      <Row>
        <Col xs={12}>
          <Engine onUpdateResults={()=>(this.setState({showResults:true}))}/>
          {this.state.showResults?<ApolloResults />:''}
        </Col>
      </Row>
    );
  }
});
