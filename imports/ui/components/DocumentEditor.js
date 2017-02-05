/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';

export default class DocumentEditor extends React.Component {
  constructor(props) {
    super(props);
    const initialDocument = props.doc;
    this.state = { doc: initialDocument };
    this.handleEditDocument = this.handleEditDocument.bind(this);
  }

  handleEditDocument(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        _id: this.state.doc._id,
        title: this.title.value,
        body: this.body.value,
      },
    })
    .then(() => {
      this.props.data.refetch();
      Bert.alert('Document updated!', 'success');
    }).catch((error) => {
      Bert.alert(error, 'danger');
    });
  }

  componentDidMount() {
    setTimeout(() => { document.querySelector('[name="title"]').focus(); }, 0);
  }

  render() {
    const { doc } = this.state;
    return (<form
      ref={ form => (this.documentEditorForm = form) }
      onSubmit={ this.handleEditDocument }
    >
      <FormGroup>
        <ControlLabel>Title</ControlLabel>
        <input
          ref={ title => (this.title = title)}
          type="text"
          className="form-control"
          name="title"
          defaultValue={ doc && doc.title }
          placeholder="Oh, The Places You'll Go!"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Body</ControlLabel>
        <input
          ref={ body => (this.body = body)}
          className="form-control"
          name="body"
          defaultValue={ doc && doc.body }
          placeholder="Congratulations! Today is your day. You're off to Great Places! You're off and away!"
        />
      </FormGroup>
      <Button type="submit" bsStyle="success">
        { doc && doc._id ? 'Save Changes' : 'Add Document' }
      </Button>
    </form>);
  }
}

DocumentEditor.propTypes = {
  data: React.PropTypes.object,
  doc: React.PropTypes.object,
  mutate: React.PropTypes.func,
};
