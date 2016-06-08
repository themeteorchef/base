import React from 'react';
import { ApolloProvider, connect } from 'react-apollo';

import mapQueriesToProps from '../../../api/bios/query';
import Client from '../../../modules/apollo-client';

import Loading from '../../components/loading';
import SortNav from './results/sort-nav';
import Document from '../../components/search/results/docs/document';

const DOCS_PER_PAGE   = 5,
      PAGES_PER_FETCH = 2,
      PIXELS_PER_DOC  = 59,
      PIXELS_PER_PAGE = DOCS_PER_PAGE * PIXELS_PER_DOC,
      DEFAULT_LIMIT   = 10;

let shouldScroll = false;

const SortNavDocs = React.createClass({
  getInitialState() {
    return {
      priSort:'Date',
      priUpOrDown:'down',
      secSort:'Date',
      secUpOrDown:'down',

      activePage:1,
      numbPages:0,
      prevOddIdx:0,
      newOffset:DEFAULT_LIMIT,
      elements:[]
    };
  },

  componentWillReceiveProps(nextProps){
//TESTING
console.log('componentWillReceiveProps',nextProps);
//TESTING
    if(!nextProps.getDocs.loading){
      const numbPages = Math.ceil(nextProps.getDocs.bios.count/DOCS_PER_PAGE),
            newElements = this.buildElements(nextProps.getDocs.bios.rows);
//TESTING
console.log('newElements.length',newElements.length);
//TESTING
      this.setState({numbPages,elements:this.state.elements.concat(newElements)});
    }
  },

  buildElements(docs){
    const elements = [];
    docs.map(doc => elements.push(<Document className="infinite-list-item" key={doc.id} bioOrJob={doc} />));
    return elements;
  },

  componentDidUpdate(prevProps,prevState){
//TESTING
console.log('componentDidUpdate',prevProps,prevState,this.props.getDocs);
console.log('this.state.activePage',this.state.activePage);
//TESTING
    if(!this.props.getDocs.loading){
      //shouldScroll if clicking nav page button
//TESTING
console.log('shouldScroll',shouldScroll);
console.log('---');
//TESTING
      if(shouldScroll || !prevState.elements.length)
        this.scrollToPosition(this.state.activePage);
    }
  },

  scrollToPosition(newPage){
//TESTING
console.log('scrollToPosition: newPage',newPage);
//TESTING
    const c = document.getElementById('docsContainer'),
          topOfPage = PIXELS_PER_PAGE * (newPage - 1);
//TESTING
console.log('c.scrollTop',c.scrollTop);
console.log('c.scrollTopMax',c.scrollTopMax);
console.log('topOfPage',topOfPage);
//TESTING
    if(topOfPage!=c.scrollTop)
      c.scrollTop = topOfPage;
//  if(c.scrollTop<topOfPage)
//    adjust scrollTop
//TESTING
console.log('c.scrollTop',c.scrollTop);
console.log('c.scrollTopMax',c.scrollTopMax);
//TESTING
  },

  handleScroll(event){
    if(shouldScroll){
      shouldScroll = false;
      return;
    }

    const elemLength = this.state.elements.length,
          c = document.getElementById('docsContainer');

    if(elemLength<this.props.getDocs.bios.count && !this.props.getDocs.loading){
      const shouldRefetch = (c.scrollHeight - c.scrollTop < (c.clientHeight + 100)),
            nxPg = (this.state.activePage + 1),
            beginPixelForNxPg = (PIXELS_PER_PAGE * nxPg),
            beginPixelForPgAfter = (PIXELS_PER_PAGE * (nxPg+1));
//TESTING
console.log('handleScroll');
console.log('clientHeight',c.clientHeight);
console.log('scrollTop',c.scrollTop);
console.log('scrollHeight',c.scrollHeight);
console.log('elemLength',elemLength);
console.log('this.props.getDocs',this.props.getDocs);
console.log('nxPg',nxPg);
console.log('beginPixelForNxPg',beginPixelForNxPg);
console.log('beginPixelForPgAfter',beginPixelForPgAfter);
console.log('shouldScroll',shouldScroll);
console.log('shouldRefetch',shouldRefetch);
console.log('beginPixelForNxPg < c.scrollTop < beginPixelForPgAfter',
  ((beginPixelForNxPg < c.scrollTop) && (c.scrollTop < beginPixelForPgAfter)));
//TESTING
      if(shouldRefetch){
        this.setState({activePage:nxPg});
//TESTING
console.log('refetch');
//TESTING
        this.props.getDocs.refetch({offset:elemLength,limit:DEFAULT_LIMIT});
      }
      else if((beginPixelForNxPg < c.scrollTop) && (c.scrollTop < beginPixelForPgAfter))
//TESTING
{console.log('no refetch');
//TESTING
        this.setState({activePage:nxPg});
//TESTING
}
//TESTING
//TESTING
console.log('***');
//TESTING
    }
  },

  pageFromNav(newPage){
//TESTING
console.log('newPage',newPage);
//TESTING
    if(typeof newPage =='number'){
      shouldScroll = true;
      const newState = {activePage:newPage},
            oddPage = (newPage%2)?newPage:(newPage-1);

      let newOddIdx = 0;
      for(let i=1;i<oddPage;i+=2)
        newOddIdx++;
//TESTING
console.log('oddPage',oddPage);
console.log('newOddIdx',newOddIdx);
console.log('this.state.prevOddIdx',this.state.prevOddIdx);
//TESTING
      //oddPage >= 3 b/c the first 10 docs (pages 1 & 2) are loaded by default
      //and each set of 10 docs are loaded only once
      if(newOddIdx>this.state.prevOddIdx){
        newState.prevOddIdx = newOddIdx;
        const newLimit = (newOddIdx - this.state.prevOddIdx) * PAGES_PER_FETCH * DOCS_PER_PAGE;
        newState.newOffset = this.state.newOffset + newLimit;
//TESTING
console.log('refetch',this.state.newOffset,newLimit);
//TESTING
        this.props.getDocs.refetch({offset:this.state.newOffset,limit:newLimit});
      }
//TESTING
console.log('newState',newState);
//TESTING
      this.setState(newState);
    }
  },

  mdataFromSort(priOrSec,eventKey){
//TESTING
console.log('mdataFromSort',priOrSec,eventKey);
//TESTING
  },

  ascDescFromSort(priOrSec){
//TESTING
console.log('ascDescFromSort',priOrSec);
//TESTING
  },

  render(){
    return (
      (this.props.getDocs.loading && !this.props.getDocs.hasOwnProperty('bios'))?
        <Loading />:
        <div>
          <SortNav
            mdataFromSort={this.mdataFromSort}
            selected={{pri:this.state.priSort,sec:this.state.secSort}}
            upOrDown={{pri:this.state.priUpOrDown,sec:this.state.secUpOrDown}}
            ascDescFromSort={this.ascDescFromSort}
            pageFromNav={this.pageFromNav}
            numbPages={this.state.numbPages}
            activePage={this.state.activePage}
          />
          <div id="docsContainer" onScroll={this.handleScroll}>
            {this.state.elements}
          </div>
        </div>
    );
  }
});

const Results = connect({
mapQueriesToProps
})(SortNavDocs);

//store={Store}
export default ApolloResults = (props) => (
  <ApolloProvider client={Client}>
    <Results />
  </ApolloProvider>
);