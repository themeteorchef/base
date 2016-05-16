import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';

require('react-datepicker/dist/react-datepicker.css');

export const DatePick = React.createClass({
  getInitialState() {
//TESTING
console.log('getInitialState');
console.log(moment(this.props.date));
//TESTING
    return {
      date: moment(this.props.date)
    };
  },

  handleChange(newDate) {
//TESTING
console.log('handleChange');
console.log(moment(newDate));
//TESTING
    this.setState({date: moment(newDate)});
  },
/*
    popoverAttachment='bottom center'
    popoverTargetAttachment='top center'
    popoverTargetOffset='0px 0px' />
*/
/*
        showYearDropdown
        dateFormatCalendar="MMMM"
*/
  render() {
    return (<div>
      <div className="spacer" />
      <div className="spacer" />
      <DatePicker
        selected={this.state.date}
        onChange={this.handleChange}
        todayButton={'Today'}
        maxDate={moment()}
        popoverTargetOffset='0px 0px'
      />
    </div>);
  }
});