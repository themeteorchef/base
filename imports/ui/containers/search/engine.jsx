import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';

import { First } from '../../components/search/cols/first.jsx';
import { Second } from '../../components/search/cols/second.jsx';
import { Third } from '../../components/search/cols/third.jsx';

export const Engine = React.createClass({
  criteria:{},

  getInitialState() {
    return {
      currMdataChoice:null,
      criteria:this.criteria,
      btnStyle:'link'
    };
  },

  onClick(mdata){
    this.setState({ currMdataChoice: mdata });
  },

  updateCriteria(data){
    if(data.length)
      this.criteria[this.state.currMdataChoice] = data;
    else
      delete this.criteria[this.state.currMdataChoice];

    const newState = {criteria:this.criteria,btnStyle:'warning'};
    this.setState(newState,()=>{
      var out = document.getElementById("criteriaContainer"),
          // allow 1px inaccuracy by adding 1
          isScrolledToBottom = out.scrollHeight - out.clientHeight <= out.scrollTop + 1;

      if(!isScrolledToBottom)
        out.scrollTop = out.scrollHeight - out.clientHeight;
    });
  },

  updateResults(){
    this.setState({btnStyle:'link'});
    this.props.onUpdateResults();
  },

  render(){
    return (
      <Grid>
        <Row id="gridRow">
          <Col sm={4} id="outerColOne">
            <First onClick={this.onClick} />
          </Col>
          <Col sm={4} id="outerColTwo">
            <Second engineState={this.state} updateCriteria={this.updateCriteria} />
          </Col>
          <Col sm={4} id="outerColThree">
            <Third criteria={this.state.criteria} btnStyle={this.state.btnStyle} updateResults={this.updateResults} />
          </Col>
        </Row>
      </Grid>
    );
  }
});