import React from 'react';
import Infinite from 'react-infinite';

import { Result } from './result';
import { Loading } from '../../../components/loading';

export default InfiniteResults = React.createClass({
  componentDidMount(){
    var c = document.getElementsByClassName("infiniteComponent")[0];
    c.scrollTop = 0;
/*console.log('c',c)
console.log('c.scrollTop',c.scrollTop)
console.log('c.scrollHeight',c.scrollHeight)
console.log('c.clientHeight',c.clientHeight)*/
  },

  getInitialState(){
    return {
      elements:this.buildElements(),
      isInfiniteLoading:false
    }
  },

  buildElements(){
    var elements = [];

    if(this.props.results.bio.rows.length){
      this.props.results.bio.rows.map((result) => (
        elements.push(<Result className="infinite-list-item" key={ result.id } result={ result } />)
      ));
    }

    return elements;
  },

  handleInfiniteLoad(){
//TESTING
/*console.log('handleInfiniteLoad');
console.log('this.state',this.state);
console.log('this.props',this.props);*/
//TESTING
var elemLength = this.state.elements.length;
if(elemLength<this.props.results.bio.count){
  if(!this.props.results.loading){
    this.props.refetch(elemLength);

        var that = this;
        this.setState({isInfiniteLoading:true});
        setTimeout(function() {
            var newElements = that.buildElements(elemLength, elemLength + 1000),
newState = {isInfiniteLoading:false,elements:that.state.elements.concat(newElements)};
//TESTING
/*console.log('handleInfiniteLoad setTimeout');
console.log('newState',newState);
console.log('');*/
//TESTING
            that.setState(newState);
        }, 2500);
  }
}
else
//calling setState to force a call to shouldComponentUpdate
//shouldComponentUpdate is needed to remove the 'Loading...' element
this.setState(this.state);
  },

  elementInfiniteLoad(){
    return <div className="infinite-list-item">
      Loading...
    </div>;
  },

  render(){
    return <Infinite
      className="infiniteComponent"
      elementHeight={40}
      containerHeight={200}
      infiniteLoadBeginEdgeOffset={500}
      onInfiniteLoad={this.handleInfiniteLoad}
      loadingSpinnerDelegate={this.elementInfiniteLoad()}
      isInfiniteLoading={this.state.isInfiniteLoading}
            >
              {this.state.elements}
            </Infinite>;
    }
});
/*
Results.propTypes = {
  documents: React.PropTypes.array,
};
*/