import React from 'react';
import DocumentEditor from '../components/DocumentEditor.js';

const NewDocument = (props) => (
  <div className="NewDocument">
    <h4 className="page-header">New Document</h4>
    <DocumentEditor {...props} />
  </div>
);

export default NewDocument;
