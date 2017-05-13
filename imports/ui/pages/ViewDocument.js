import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

import {Meteor} from 'meteor/meteor';
import Documents from '../../api/documents/documents';
import {removeDocument} from '../../api/documents/methods';
import NotFound from './NotFound';
import container from '../../modules/container';

const handleRemove = (_id, handleSnackbarOpen) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeDocument.call({
      _id
    }, (error) => {
      if (error) {
        handleSnackbarOpen(error.reason);
      } else {
        handleSnackbarOpen('Document deleted!');
        browserHistory.push('/documents');
      }
    });
  }
};

class ViewDocument extends React.Component {
  render() {
    const {doc, handleSnackbarOpen} = this.props;

    const style = {
      marginLeft: 6,
      float: "right"
    };

    if (doc) {
      return (
        <div>
          <span style={{
            fontSize: 22
          }}>{doc && doc.title}</span>

          <RaisedButton label="Remove" labelPosition="before" primary={true} icon={< FontIcon className = "fa fa-trash-o" />} style={style} onClick={() => handleRemove(doc._id, handleSnackbarOpen)}/>

          <Link to={"/documents/" + doc._id + "/edit"}>
            <RaisedButton label="Edit" labelPosition="before" primary={true} icon={< FontIcon className = "fa fa-pencil-square-o" />} style={style}/>
          </Link>

          <Divider/>
          <br/> {doc && doc.body}
        </div>
      )
    } else {
      return (<NotFound/>)
    }
  }
}

ViewDocument.propTypes = {
  doc: PropTypes.object,
  handleSnackbarOpen: PropTypes.func
};

export default container((props, onData) => {
  const documentId = props.params._id;
  const subscription = Meteor.subscribe('documents.view', documentId);

  if (subscription.ready()) {
    const doc = Documents.findOne(documentId);
    onData(null, {doc});
  }
}, ViewDocument);
