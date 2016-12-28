import React from 'react';
import { ListGroup, Alert, ButtonGroup, Button } from 'react-bootstrap';
import Griddle from 'griddle-react';

var actionButtons = React.createClass({
    render: function () {
        return (
            <div>
                <ButtonGroup>
                    <Button bsSize="small" href={'/documents/' + this.props.rowData._id}>View</Button>
                    <Button bsSize="small" href={'/documents/' + this.props.rowData._id + '/edit'}>Edit</Button>
                </ButtonGroup>
            </div>
        );
    }
});

const columnList = ['title','body','actions'];
const columnMetadata = [
  {columnName: 'title', order: "1", displayName: 'Title', cssClassName: 'col-xs-3' },
  {columnName: 'body', order: "2", displayName: 'Body', cssClassName: 'col-xs-6' },
  {columnName: 'actions', order: "3", customComponent: actionButtons, sortable: false, cssClassName: 'col-xs-3',
    displayName: 'Actions'}
];

const DocumentsList = ({ documents }) => (
  documents.length > 0 ? <ListGroup className="DocumentsList">
    <Griddle
        results={documents}
        useGriddleStyles={false}
        tableClassName={'griddle-flex table table-bordered table-striped table-hover'}
        settingsToggleClassName='btn btn-default'
        useCustomPagerComponent={true}
        showFilter={true}
        showSettings={true}
        resultsPerPage="20"
        columnMetadata={columnMetadata}
        columns={columnList}/>
  </ListGroup> :
  <Alert bsStyle="warning">No documents yet.</Alert>
);

DocumentsList.propTypes = {
  documents: React.PropTypes.array,
};

export default DocumentsList;
