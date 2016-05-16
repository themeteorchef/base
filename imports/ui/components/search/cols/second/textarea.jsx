import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

import { PlaceHolderText } from './placeHolderText';

export const Textarea = React.createClass({
  //the component's 'value' must be set to a string; can't be 'undefined'
  getText(txt){
    return txt?txt:'';
  },

  getInitialState() {
    return {
      value:this.getText(this.props.initialText)
    };
  },

  componentWillReceiveProps(newProps){
    this.setState({value:this.getText(newProps.initialText)});
  },

  //an onChange handler is necessary for the component's 'value' property to work
  //http://facebook.github.io/react/docs/forms.html#controlled-components
  handleChange(e){
    this.setState({value:e.target.value});
  },

  mouseLeave(e){
    const txt = this.getText(e.target.value);
    if(this.getText(this.props.initialText)!=txt)
      this.props.change(txt);
  },

  render() {
    return (
      <form id="textAreaForm">
        <FormGroup controlId="textAreaFormGrp">
		      <div className="spacer" />
		      <div className="spacer" />
          <FormControl
            rows="12"
            componentClass="textarea"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder={PlaceHolderText[this.props.type]}
            onMouseLeave={this.mouseLeave}
          />
		      <div className="spacer" />
		      <div className="spacer" />
        </FormGroup>
      </form>
    );
  }
});