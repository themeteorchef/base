import React from 'react';
import {
  Link
} from 'react-router';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import DocumentsList from '../components/DocumentsList.js';

const style = {
  marginLeft: 6,
  float: "right"
};

const Documents = () => (
  <div>
    <span style={{fontSize: 22}}>Documents</span>
    <Link to="/documents/new">
    <RaisedButton
      label="New Document"
      labelPosition="before"
      primary={true}
      icon={<FontIcon className="fa fa-plus-square-o" />}
      style={style}
    />
    </Link>
    <Divider />
    <br/>
    <DocumentsList />
  </div>
);

export default Documents;
