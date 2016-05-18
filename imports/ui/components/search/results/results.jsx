import React from 'react';
import { Result } from './result';
import { Loading } from '../../../components/loading';
import Infinite from 'react-infinite';

export const Results = React.createClass({
//TESTING
componentWillMount(){console.log('componentWillMount');},
componentDidMount(){console.log('componentDidMount');},
componentWillReceiveProps(){console.log('componentWillReceiveProps');},
shouldComponentUpdate(){console.log('shouldComponentUpdate');return true;},
componentWillUpdate(){console.log('componentWillUpdate');},
componentDidUpdate(){console.log('componentDidUpdate');},
componentWillUnmount(){console.log('componentWillUnmount');},
//TESTING
    getInitialState: function() {
        return {
            elements: this.buildElements(0, 20),
            isInfiniteLoading: false
        }
    },

    buildElements: function(start, end) {
        var elements = [];
this.props.results.map((result) => (
  elements.push(<Result className="infinite-list-item" key={ result._id } result={ result } />)
));
/*        for (var i = start; i < end; i++) {
            elements.push(<ListItem key={i} num={i}/>)
        }*/
        return elements;
    },

    handleInfiniteLoad: function() {
        var that = this;
        this.setState({
            isInfiniteLoading: true
        });
        setTimeout(function() {
            var elemLength = that.state.elements.length,
                newElements = that.buildElements(elemLength, elemLength + 1000);
            that.setState({
                isInfiniteLoading: false,
                elements: that.state.elements.concat(newElements)
            });
        }, 2500);
    },

    elementInfiniteLoad: function() {
return <Loading/>;
/*        return <div className="infinite-list-item">
            Loading...
        </div>;*/
    },

    render: function() {
        return <Infinite elementHeight={40}
                         containerHeight={200}
                         infiniteLoadBeginEdgeOffset={50}
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