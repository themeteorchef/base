import React from 'react';
import {
  browserHistory
} from 'react-router';
import {
  Alert
} from 'react-bootstrap';
import {
  Link
} from 'react-router';
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

const DocumentsList = ({
  documents
}) => (
  documents.length > 0 ? <div className="row">
    {documents.map(({ _id, title, body }) => (
      <div className="col-xs-6 col-sm-4 col-lg-3">
        <Link to={"/documents/" + _id}>
          <Paper key={ _id } zDepth={1}>
            <Card>
              <CardMedia>
                <img src="card-blue.png"/>
              </CardMedia>
              <CardTitle title={ title } subtitle={body}/>
            </Card>
          </Paper>
        </Link>
      </div>
    ))}
  </div> :
  <Alert bsStyle="warning">No documents yet.</Alert>
);

DocumentsList.propTypes = {
  documents: React.PropTypes.array,
};

export default DocumentsList;
