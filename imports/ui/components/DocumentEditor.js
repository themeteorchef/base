/* eslint-disable max-len, no-return-assign */

import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import documentEditor from '../../modules/document-editor.js';

export default class DocumentEditor extends React.Component {
  componentDidMount() {
    documentEditor({component: this});
    setTimeout(() => {
      document.querySelector('[name="title"]').focus();
    }, 0);
  }

  render() {
    const {doc} = this.props;

    return (
      <form ref={form => (this.documentEditorForm = form)} onSubmit={event => event.preventDefault()}>
        <TextField name="title" defaultValue={doc && doc.title} hintText="Oh, The Places You'll Go!" floatingLabelText="Title" fullWidth={true}/>
        <TextField name="body" defaultValue={doc && doc.body} hintText="Congratulations! Today is your day. You're off to Great Places! You're off and away!" floatingLabelText="Body" fullWidth={true} multiLine={true}/>

        <RaisedButton label={doc && doc._id
          ? 'Save Changes'
          : 'Add Document'} type="submit" labelPosition="before" primary={true} icon={< FontIcon className = "fa fa-floppy-o" />}/>
      </form>
    );
  }
}

DocumentEditor.propTypes = {
  doc: PropTypes.object
};
