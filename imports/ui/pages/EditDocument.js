import React from 'react';
import DocumentEditor from '../components/DocumentEditor';
import NotFound from './NotFound';

const EditDocument = ({ doc }) => {
  if (!doc) return <NotFound />;
  return (
    <div className="EditDocument">
      <h4 className="page-header">Editing "{ doc.title }"</h4>
      <DocumentEditor doc={ doc }/>
    </div>
  )
};

EditDocument.propTypes = {
  doc: React.PropTypes.object,
};

export default EditDocument;
