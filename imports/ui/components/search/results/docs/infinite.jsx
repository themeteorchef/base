import React from 'react';
import Infinite from 'react-infinite';

export default InfiniteResults = (props) => (
  <Infinite
    className="infiniteComponent"
    elementHeight={props.elementHeight}
    containerHeight={props.containerHeight}
//    isInfiniteLoading={props.isInfiniteLoading}
//    infiniteLoadBeginEdgeOffset={props.infiniteLoadBeginEdgeOffset}
//    onInfiniteLoad={props.handleInfiniteLoad}
handleScroll={props.handleScroll}
    loadingSpinnerDelegate={props.elementInfiniteLoad()}
  >
    {props.elements}
  </Infinite>
);