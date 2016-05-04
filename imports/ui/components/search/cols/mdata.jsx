import React from 'react';
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap';

export const Mdata = React.createClass({
  btnClick(e){
console.log(e.currentTarget.textContent);
  },

  render() {
    const colOne = ['Date','Name','Law Firm','Practice','Level','Experience','School'];
    const colTwo = ['Admitted','Language','Description','City','State','Country','Label'];

    return <Row>
      <Col xs={6}>
        <ButtonGroup vertical>
          {colOne.map((mdata) => (
            <Row key={mdata}>
              <Button></Button><Button onClick={this.btnClick}>{mdata}</Button>
            </Row>))}          
        </ButtonGroup>
      </Col>
      <Col xs={6} id="secondMdataCol">
        <ButtonGroup vertical>
          {colTwo.map((mdata) => (
            <Row key={mdata}>
              <Button></Button><Button onClick={this.btnClick}>{mdata}</Button>
            </Row>))}          
        </ButtonGroup>
      </Col>
    </Row>;
  },
});