import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import Documents from '../../api/documents/documents';
import container from '../../modules/container';

class DocumentsList extends React.Component {
  render() {
    const {documents} = this.props;

    if (documents.length > 0) {
      return (
        <div>
          <GridList cols={2} cellHeight={200} padding={10} style={{
            overflowY: 'auto'
          }}>
            {documents.map(({_id, title, body}) => (
              <Link to={"/documents/" + _id}>
                <GridTile key={_id} title={title} titlePosition="bottom" cols={1} rows={1}>
                  <img src={"card-blue.png"}/>
                </GridTile>
              </Link>
            ))}
          </GridList>
        </div>
      );
    } else {
      return (
        <div>No documents yet.</div>
      );
    }
  }
}

DocumentsList.propTypes = {
  documents: PropTypes.array
};

export default container((props, onData) => {
  const subscription = Meteor.subscribe('documents.list');
  if (subscription.ready()) {
    const documents = Documents.find().fetch();
    onData(null, {documents});
  }
}, DocumentsList);
