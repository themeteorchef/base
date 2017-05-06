import React from 'react';
import {
  Link
} from 'react-router';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import DocumentsList from '../containers/DocumentsList.js';

const buttonStyle = {
  margin: 12,
  width: '100%',
  textAlign: 'right'
};

const Documents = () => (
  <div>
    <span style={{fontSize: 22}}>Documents</span>
    <Link to="/documents/new">
      <RaisedButton label="New Document" primary={true} style={buttonStyle} />
    </Link>
    <Divider />
    <br/>
    <DocumentsList />
  </div>
);

export default Documents;
