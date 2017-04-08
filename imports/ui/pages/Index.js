import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

const Index = () => (
  <Paper zDepth={1}>
    <Card>
      <CardMedia>
        <img src="card-blue.png"/>
      </CardMedia>
      <CardTitle title="Base" subtitle="A starting point for Meteor applications. Currently at v4.13.0."/>
      <CardActions>
        <FlatButton label="Documentation" href="https://themeteorchef.com/base"/>
      </CardActions>
    </Card>
  </Paper>
);

export default Index;
