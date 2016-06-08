import React from 'react';
import { Pagination } from 'react-bootstrap';

export default Nav = (props) => (
  <Pagination
    prev
    next
    first
    last
    ellipsis
    boundaryLinks
    items={props.numbPages}
    maxButtons={10}
    activePage={props.activePage}
    onSelect={props.pageFromNav} />
);