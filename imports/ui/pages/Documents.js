import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import DocumentsList from '../components/DocumentsList.js';

const style = {
  marginLeft: 6,
  float: 'right'
};

export default class Documents extends React.Component {
  render() {
    const {columnSize, handleSnackbarOpen} = this.props;

    return (
      <div>
        <span style={{
          fontSize: 22
        }}>Documents</span>
        <Link to="/documents/new">
          <RaisedButton label="New Document" labelPosition="before" primary={true} icon={< FontIcon className = "fa fa-plus-square-o" />} style={style}/>
        </Link>
        <Divider/>
        <br/>
        <DocumentsList columnSize={columnSize} handleSnackbarOpen={handleSnackbarOpen}/>
      </div>
    )
  }
}

Documents.propTypes = {
  columnSize: PropTypes.number,
  handleSnackbarOpen: PropTypes.func
};
