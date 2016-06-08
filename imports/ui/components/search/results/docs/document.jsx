import React from 'react';
import { ListGroupItem, Label } from 'react-bootstrap';

export default Document = (props) => (
  <ListGroupItem className="individualDoc" header={JSON.parse(props.bioOrJob.doc).full_name[1]} href="#">
Law Firm
  </ListGroupItem>
);
