import React from 'react';
import { Col, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';

import { Entities } from '../../../../../api/entities/entities';
const entitiesSub = Meteor.subscribe('entities');

//import { Levels } from '../../../../../api/levels/levels';
//const levelsSub = Meteor.subscribe('levels');

import { Location } from '../../../../../api/location/location';
const locationSub = Meteor.subscribe('location');
//import { Metros } from '../../../../../api/metros/metros';
//const metrosSub = Meteor.subscribe('metros');

//import { Labels } from '../../../../../api/labels/labels';
//const labelsSub = Meteor.subscribe('labels');

export const List = React.createClass({
  handleChange(e) {
    const selected = [];
    [...e.target.children].map((o) => {if(o.selected)selected.push(o.value);});
    this.props.change(selected);
  },

  render() {
    let key,
        options = [],
        values = this.props.chosen?this.props.chosen:[];

    switch(this.props.type){
      case 'Law Firm':
        options = entitiesSub.ready()?Entities.find().fetch():[];
        key = 'name';
        break;
      case 'Level':
        break;
      case 'City':
      case 'State':
      case 'Country':
//combine metro & location subs
        options = locationSub.ready()?Location.find().fetch():[];
        key = this.props.type.toLowerCase();
        break;
      case 'Label':
        break;
    }

    return (
      <form id="listForm">
        <FormGroup controlId="ListFormGrp">
          <div className="spacer" />
          <div className="spacer" />
          <FormControl
            componentClass="select"
            multiple
            onChange={this.handleChange}
            value={values}
          >
            {options.map((doc) => (
              <option key={doc._id} value={doc[key]}>{doc[key]}</option>
            ))}
          </FormControl>
          <Col xsHidden={true} smHidden={true}>
            <HelpBlock>Cntl/Cmd or Shift + click to select multiple</HelpBlock>
          </Col>
        </FormGroup>
      </form>
    );
  }
});