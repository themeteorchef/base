import React from 'react';
import { Form, Col, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';

//import { Exp } from '../../../../../api/exp/exp';
//const expSub = Meteor.subscribe('exp');

export const Exp = React.createClass({
/*  getInitialState() {
    return {
      value: ''
    };
  },*/

  handleChange(e) {
//    this.setState({ value: e.target.value });
//TESTING
console.log('handleChange');
console.log(e);
console.log(this);
console.log('');
//TESTING
  },
// <FormGroup controlId="" GIVES THE SAME ID TO EVERY FormControl IN THE FormGroup
  render() {
    return (
      <Form id="expForm" horizontal>
<div className="spacer" />
<div className="spacer" />
        <FormGroup controlId="expLblsFormGrp">
          <Col xs={2}></Col>
          <Col componentClass={ControlLabel} xs={2}>From</Col>
          <Col xs={4} sm={3}></Col>
          <Col componentClass={ControlLabel} xs={2}>To</Col>
          <Col xs={2}></Col>
        </FormGroup>

        <FormGroup controlId="expCombosFormGrp">
          <Col xs={6}>
            <FormControl
              componentClass="select"
              onChange={this.handleChange}

            >
<option value="open">OPEN</option>
<option value="one">...</option>
<option value="two">...</option>
<option value="three">...</option>
</FormControl>
          </Col>
          <Col xs={6}>
            <FormControl
              componentClass="select"
              onChange={this.handleChange}

            >
<option value="open">OPEN</option>
<option value="one">...</option>
<option value="two">...</option>
<option value="three">...</option>
</FormControl>
          </Col>
        </FormGroup>
<div className="spacer" />
<div className="spacer" />
      </Form>
    );
  }
});