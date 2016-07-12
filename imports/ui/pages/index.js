import React from 'react';
import { Jumbotron, Button} from 'react-bootstrap';

export const Index = () => (
  <Jumbotron className="text-center">
    <h2>Base</h2>
    <p>A starting point for Meteor applications.</p>
    <p><Button bsStyle="success" href="https://themeteorchef.com/base"> Read the Documentation </Button></p>
    <p style={ { fontSize: '16px', color: '#aaa' } }>Currently at v4.4.0</p>
  </Jumbotron>
);
