import React from 'react';
import { Exp } from './second/combos';
import { DatePick } from './second/date';
import { List } from './second/list';
import { Textarea } from './second/textarea';

export const Second = React.createClass({
  getInitialState() {
    return {
      comp: null
    };
  },

  componentWillReceiveProps(newProps){
//if(newProps.currMdataChoice==this.props.currMdataChoice)
//return;

    let comp,
        choice = newProps.engineState.currMdataChoice,
        data = newProps.engineState.criteria[choice];

    switch(choice){
      case 'Date':
        comp = <DatePick date="1995-12-25"/> ;
        break;
      case 'Name':
      case 'Practice':
      case 'School':
      case 'Admitted':
      case 'Language':
      case 'Description':
        comp = <Textarea
                  type={choice}
                  initialText={data}
                  change={this.props.updateCriteria}
                /> ;
        break;
      case 'Law Firm':
      case 'Level':
      case 'City':
      case 'State':
      case 'Country':
      case 'Label':
        comp = <List
                  type={choice}
                  chosen={data}
                  change={this.props.updateCriteria}
                /> ;
        break;
      case 'Experience':
        comp = <Exp /> ;
        break;
      default:
        comp = null;
    }

    this.setState({comp});
  },

  render(){
    return this.state.comp;
  }
});