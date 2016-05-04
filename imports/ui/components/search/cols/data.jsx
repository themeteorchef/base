import React from 'react';
import { Row, FormGroup, FormControls } from 'react-bootstrap';
/*
textarea
list
two comboboxes
date picker
*/
export const Data = React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  render() {
    return <Row>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <FormControls
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControls.Feedback />
        </FormGroup>
      </Row>;
  }
});