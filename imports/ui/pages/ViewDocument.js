import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

import {Meteor} from 'meteor/meteor';
import {Bert} from 'meteor/themeteorchef:bert';
import Documents from '../../api/documents/documents';
import {removeDocument} from '../../api/documents/methods';
import NotFound from './NotFound';
import container from '../../modules/container';

const handleRemove = (_id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeDocument.call({
      _id
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Document deleted!', 'success');
        browserHistory.push('/documents');
      }
    });
  }
};

const ViewDocument = ({doc}) => {
  const style = {
    marginLeft: 6,
    float: "right"
  };

  return doc
    ? (
      <div>
        <span style={{
          fontSize: 22
        }}>{doc && doc.title}</span>

        <RaisedButton label="Remove" labelPosition="before" primary={true} icon={< FontIcon className = "fa fa-trash-o" />} style={style} onClick={() => handleRemove(doc._id)}/>

        <Link to={"/documents/" + doc._id + "/edit"}>
          <RaisedButton label="Edit" labelPosition="before" primary={true} icon={< FontIcon className = "fa fa-pencil-square-o" />} style={style}/>
        </Link>

        <Divider/>
        <br/> {doc && doc.body}
      </div>
    )
    : <NotFound/>;
};

ViewDocument.propTypes = {
  doc: PropTypes.object
};

export default container((props, onData) => {
  const documentId = props.params._id;
  const subscription = Meteor.subscribe('documents.view', documentId);

  if (subscription.ready()) {
    const doc = Documents.findOne(documentId);
    onData(null, {doc});
  }
}, ViewDocument);
