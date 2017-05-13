/* eslint-disable no-undef */

import {browserHistory} from 'react-router';
import {upsertDocument} from '../api/documents/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const {doc, handleSnackbarOpen} = component.props;
  const confirmation = doc && doc._id
    ? 'Document updated!'
    : 'Document added!';
  const upsert = {
    title: document.querySelector('[name="title"]').value.trim(),
    body: document.querySelector('[name="body"]').value.trim()
  };

  if (doc && doc._id)
    upsert._id = doc._id;

  upsertDocument.call(upsert, (error, response) => {
    if (error) {
      handleSnackbarOpen(error.reason);
    } else {
      component.documentEditorForm.reset();
      handleSnackbarOpen(confirmation);
      browserHistory.push(`/documents/${response.insertedId || doc._id}`);
    }
  });
};

const validate = () => {
  $(component.documentEditorForm).validate({
    rules: {
      title: {
        required: true
      },
      body: {
        required: true
      }
    },
    messages: {
      title: {
        required: 'Need a title in here, Seuss.'
      },
      body: {
        required: 'This thneeds a body, please.'
      }
    },
    submitHandler() {
      handleUpsert();
    }
  });
};

export default function documentEditor(options) {
  component = options.component;
  validate();
}
