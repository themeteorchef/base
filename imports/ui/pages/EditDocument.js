import React from 'react';
import { PropTypes } from 'prop-types';
import DocumentEditor from '../components/DocumentEditor';

const EditDocument = ({ document }) => (
  <div className="EditDocument">
    <h4 className="page-header">Editing &quot;{document.title}&quot;</h4>
    <DocumentEditor doc={document} />
  </div>
);

EditDocument.propTypes = {
  document: PropTypes.object.isRequired,
};

export default EditDocument;
