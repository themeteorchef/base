import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Index = () => (
  <Jumbotron className="text-center">
    <h2>Base</h2>
    <p>A starting point for Meteor applications.</p>
    <p><a className="btn btn-success" href="https://themeteorchef.com/base" role="button">Read the Documentation</a></p>
    <p style={ { fontSize: '16px', color: '#aaa' } }>Currently at v4.8.0</p>
  </Jumbotron>
);

export default Index;
