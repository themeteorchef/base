import React from 'react';
import PropTypes from 'prop-types';
import DocumentEditor from '../components/DocumentEditor.js';

export default class NewDocument extends React.Component {
  render() {
    const {handleSnackbarOpen} = this.props;

    return (
      <div className="NewDocument">
        <h4 className="page-header">New Document</h4>
        <DocumentEditor handleSnackbarOpen={handleSnackbarOpen}/>
      </div>
    )
  }
}

NewDocument.propTypes = {
  handleSnackbarOpen: PropTypes.func
};
