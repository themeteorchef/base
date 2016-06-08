import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap';

const colOne = ['Date','Name','Law Firm','Practice','Level','Experience','School'];
const colTwo = ['Admitted','Language','Description','City','State','Country','Label'];

export const First = React.createClass({
  btnClick(mdata, event){
    this.props.onClick(event.currentTarget.textContent);
    ReactDOM.findDOMNode(this.refs[mdata]).classList.toggle('open');
  },

  render() {
    return <Row>
      <div className="spacer" />
      <Col xs={6}>
        <ButtonGroup vertical>
          {colOne.map((mdata) => (
            <Row key={mdata}>
              <Button className="mdata-btn" ref={mdata} onClick={this.btnClick.bind(this, mdata)}>{mdata}</Button>
              <div className="spacer" />
            </Row>))}          
        </ButtonGroup>
      </Col>
      <Col xs={6} id="secondMdataCol">
        <ButtonGroup vertical>
          {colTwo.map((mdata) => (
            <Row key={mdata}>
              <Button className="mdata-btn" ref={mdata} onClick={this.btnClick.bind(this, mdata)}>{mdata}</Button>
              <div className="spacer" />
            </Row>))}          
        </ButtonGroup>
      </Col>
    </Row>;
  },
});