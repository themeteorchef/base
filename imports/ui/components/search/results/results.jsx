import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { Result } from './result';


export const Results = React.createClass({
  componentDidMount() {
  	console.log('updated');
  	  const component = this;
  	  component.props.subscription.loadNextPage();
	  // window.onscroll = function( event ) {
	  //   if ( ( window.innerHeight + window.scrollY ) >= document.body.offsetHeight ) {
	  //     component.props.subscription.loadNextPage();
	  //   }
	  // }
	setTimeout(function() {
      component.props.subscription.loadNextPage();	
	}, 3000);
  },
  render() {
  	return this.props.results.length > 0 ? <ListGroup className="resultsList">
	{this.props.results.map((result) => (
	  <Result key={ result._id } document={ result } />
	))}
	</ListGroup> :
	<Alert id="resultsAlert" bsStyle="warning">No results yet...</Alert>;
  }
});

// export const Results = ({results, subsciption}) => (
//   results.length > 0 ? <ListGroup className="resultsList">
//     {results.map((result) => (
//       <Result key={ result._id } document={ result } />
//     ))}
//   </ListGroup> :
//   <Alert id="resultsAlert" bsStyle="warning">No results yet...</Alert>
// );
/*
Results.propTypes = {
  documents: React.PropTypes.array,
};
*/