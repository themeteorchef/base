import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const Index = () => (
  <Paper zDepth={1}>
    <Card>
      <CardMedia>
        <img src="card-blue.png"/>
      </CardMedia>
      <CardTitle title="Base" subtitle="A starting point for Meteor applications."/>
      <CardActions>
        <RaisedButton label="Documentation" primary={true} icon={< FontIcon className = "fa fa-info-circle" />} href="https://themeteorchef.com/base"/>
      </CardActions>
    </Card>
  </Paper>
);

export default Index;
