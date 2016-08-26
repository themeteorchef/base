import React from 'react';
import { ApolloProvider, connect } from 'react-apollo';

import mapQueriesToProps from '../../../api/bios/query';
import Client from '../../../modules/apollo-client';

import Loading from '../../components/loading';
import SortNav from './results/sort-nav';
import Document from '../../components/search/results/docs/document';

const DOCS_PER_PAGE         = 5,
      PAGES_PER_FETCH       = 2,
      DEFAULT_LIMIT         = 10,
      CLIENT_HEIGHT_BUFFER  = 100,
      PAGE_DELAY            = 500,
      ADD_ONSCROLL_DELAY    = 500;

const SortNavDocs = React.createClass({
  scrollTimeout:undefined,
clickedPage:undefined,

  getInitialState() {
    return {
      priSort:'Date',
      priUpOrDown:'down',
      secSort:'Date',
      secUpOrDown:'down',

      numbPages:0,
      activePage:1,
      highestOddIdx:0,
      elements:[]
    };
  },

  //only fires on new data from server
  componentWillReceiveProps(nextProps){
//TESTING
console.group('componentWillReceiveProps');
console.log('loading',nextProps.getDocs.loading);
//TESTING
    if(!nextProps.getDocs.loading){
      const numbPages = Math.ceil(nextProps.getDocs.bios.count/DOCS_PER_PAGE),
            newElements = this.buildElements(nextProps.getDocs.bios.rows),
            allElements = this.state.elements.concat(newElements),
            newState = {numbPages,elements:allElements},
            oddIdxDiff = newElements.length / (PAGES_PER_FETCH * DOCS_PER_PAGE);
//TESTING
console.log('oddIdxDiff',oddIdxDiff);
console.log('this.state.highestOddIdx',this.state.highestOddIdx);
//TESTING
      if(this.clickedPage){
        newState.highestOddIdx = (this.state.highestOddIdx + oddIdxDiff);
        newState.activePage = this.clickedPage;
        this.clickedPage = undefined;
      }
      else if(this.state.elements.length)
        newState.highestOddIdx = (this.state.highestOddIdx + oddIdxDiff);
//TESTING
console.log('newState',newState);
console.log('newElements.length',newElements.length);
console.log('this.state.activePage',this.state.activePage);
//TESTING
      this.setState(newState);
    }
//TESTING
console.groupEnd();
//TESTING
  },

  buildElements(docs){
    const elements = [];
    docs.map(doc => elements.push(<Document className="infinite-list-item" key={doc.id} bioOrJob={doc} />));
    return elements;
  },

  componentDidUpdate(prevProps,prevState){
    const c = this.getDocsContainer();
//TESTING
console.group('componentDidUpdate');
console.log('prevProps',prevProps);
console.log('prevState',prevState);
console.log('this.props.getDocs',this.props.getDocs);
const docs = document.getElementsByClassName('individualDoc');
console.log('c.onscroll',c.onscroll);
console.log('docs length',docs.length);
console.groupEnd();
//TESTING
    if(!this.props.getDocs.loading){
      //if coming from initial load OR clicking nav page button
      if(!prevState.elements.length || !c.onscroll)
        this.scrollToPosition();
    }
  },

  getDocsContainer(){
    return document.getElementById('docsContainer');
  },

  scrollToPosition(){
//TESTING
console.group('scrollToPosition');
console.log('this.state.activePage',this.state.activePage);
//TESTING
    const c = this.getDocsContainer(),
          pixelsPerPage = this.pixelsPerPg(c.scrollHeight),
          topOfPage = pixelsPerPage * (this.state.activePage - 1);
//TESTING
console.log('c.scrollTop',c.scrollTop);
console.log('c.scrollTopMax',c.scrollTopMax);
console.log('scrollHeight',c.scrollHeight);
console.log('pixelsPerPage',pixelsPerPage);
console.log('topOfPage',topOfPage);
console.log('c.onscroll',c.onscroll);
//TESTING
    if(topOfPage!=c.scrollTop)
      c.scrollTop = topOfPage;

    setTimeout(()=>(c.onscroll=this.setScrollTimeout),ADD_ONSCROLL_DELAY);
//TESTING
console.log('c.onscroll',c.onscroll);
console.log('new c.scrollTop',c.scrollTop);
console.log('new c.scrollTopMax',c.scrollTopMax);
console.groupEnd();
//TESTING
  },

  setScrollTimeout() {
//TESTING
console.group('setScrollTimeout');
console.log('scrollTimeout',this.scrollTimeout);
console.timeStamp();
//TESTING
    if(!this.scrollTimeout){
      let that = this;
      this.scrollTimeout = setTimeout(()=>{
        that.scrollTimeout = undefined;
//TESTING
console.timeStamp('setScrollTimeout done');
//TESTING
        that.refetchOrSetActivePage();
      },PAGE_DELAY);
    }
//TESTING
console.groupEnd();
//TESTING
  },

  refetchOrSetActivePage(){
    const elemLength = this.state.elements.length,
          c = this.getDocsContainer(),
          pixelsUntilDone = (c.scrollHeight - c.scrollTop);
//TESTING
console.group('refetchOrSetActivePage');
console.log('elemLength',elemLength);
console.log('pixelsUntilDone',pixelsUntilDone);
console.log('scrollTop',c.scrollTop);
console.log('scrollHeight',c.scrollHeight);
console.log('this.props.getDocs',this.props.getDocs);
//TESTING
    if(elemLength<this.props.getDocs.bios.count){
      const viewPortAndBuffer = (c.clientHeight + CLIENT_HEIGHT_BUFFER),
            shouldRefetch = (pixelsUntilDone < viewPortAndBuffer);
//TESTING
console.log('viewPortAndBuffer',viewPortAndBuffer);
console.log('shouldRefetch',shouldRefetch);
//TESTING
      if(shouldRefetch)
        this.props.getDocs.refetch({offset:elemLength,limit:DEFAULT_LIMIT});
      else
        this.setActivePage(pixelsUntilDone);
    }
    else
      this.setActivePage(pixelsUntilDone);
//TESTING
console.groupEnd();
//TESTING
  },

  setActivePage(pixelsUntilDone){
//TESTING
console.group('setActivePage');
//TESTING
    const c = this.getDocsContainer(),
          pixelsPerPage = this.pixelsPerPg(c.scrollHeight),

          done = (pixelsUntilDone==c.clientHeight),
          onLastPage = (this.state.activePage==this.state.numbPages),

          prevPg = (this.state.activePage - 1),
          nxPg = (this.state.activePage + 1),

          endPixelForPrevPg = (pixelsPerPage * prevPg),
          beginPixelForNxPg = (pixelsPerPage * this.state.activePage),

          shouldGoBack = (c.scrollTop < (endPixelForPrevPg - CLIENT_HEIGHT_BUFFER)),
          shouldGoForward = (c.scrollTop > (beginPixelForNxPg - CLIENT_HEIGHT_BUFFER)),

          nonZeroScrollTop = c.scrollTop?c.scrollTop:1,
          newCurrPgNoBuffer = Math.ceil(nonZeroScrollTop/pixelsPerPage),
          endPixelForNewCurrPgNoBuffer = (pixelsPerPage * newCurrPgNoBuffer),
          addPageForBuffer = (CLIENT_HEIGHT_BUFFER > (endPixelForNewCurrPgNoBuffer - c.scrollTop)),

          newCurrPg = addPageForBuffer?(newCurrPgNoBuffer+1):newCurrPgNoBuffer,
          newNxPg = (newCurrPg + 1),

          beginPixelForNewNxPg = (pixelsPerPage * newCurrPg),
          shouldGoForwardToNewNxPg = (c.scrollTop > (beginPixelForNewNxPg - CLIENT_HEIGHT_BUFFER));
//TESTING
console.log('done',done);
console.log('this.state.activePage',this.state.activePage);
console.log('onLastPage',onLastPage);

console.log('prevPg',prevPg);
console.log('nxPg',nxPg);

console.log('endPixelForPrevPg',endPixelForPrevPg);
console.log('beginPixelForNxPg',beginPixelForNxPg);

console.log('shouldGoBack',shouldGoBack);
console.log('shouldGoForward',shouldGoForward);

console.log('c.scrollTop',c.scrollTop);
console.log('nonZeroScrollTop',nonZeroScrollTop);
console.log('pixelsPerPage',pixelsPerPage);
console.log('newCurrPgNoBuffer',newCurrPgNoBuffer);
console.log('endPixelForNewCurrPgNoBuffer',endPixelForNewCurrPgNoBuffer);
console.log('addPageForBuffer',addPageForBuffer);

console.log('newCurrPg',newCurrPg);
console.log('newNxPg',newNxPg);

console.log('beginPixelForNewNxPg',beginPixelForNewNxPg);
console.log('shouldGoForwardToNewNxPg',shouldGoForwardToNewNxPg);
//TESTING
    if(shouldGoBack)
      this.setState({activePage:newCurrPg});
    else if(done && !onLastPage)
      this.setState({activePage:this.state.numbPages});
    else if(shouldGoForward)
      this.setState({activePage:shouldGoForwardToNewNxPg?newNxPg:newCurrPg});
//TESTING
console.groupEnd();
//TESTING
  },

  pixelsPerPg(scrollHeight){
    const pixelsPerDoc = (scrollHeight / this.state.elements.length);
    return (pixelsPerDoc * DOCS_PER_PAGE);
  },

  //starts here if nav button clicked
  pageFromNav(newPage){
//TESTING
console.group('pageFromNav');
console.log('newPage',newPage);
//TESTING
    if(typeof newPage =='number'){
      const c = this.getDocsContainer(),
            newOddIdx = this.getOddIdx(newPage);
      c.onscroll = undefined;
//TESTING
console.log('newOddIdx',newOddIdx);
console.log('this.state.highestOddIdx',this.state.highestOddIdx);
//TESTING
      if(newOddIdx>this.state.highestOddIdx){
        this.clickedPage = newPage;
        const newLimit = (newOddIdx - this.state.highestOddIdx) * PAGES_PER_FETCH * DOCS_PER_PAGE;
//TESTING
console.log('refetch',newLimit);
//TESTING
        this.props.getDocs.refetch({offset:this.state.elements.length,limit:newLimit});
      }
      else
        this.setState({activePage:newPage});
    }
//TESTING
console.groupEnd();
//TESTING
  },

  getOddIdx(newPage){
    const oddPage = (newPage%2)?newPage:(newPage-1);
    let newOddIdx = 0;
    for(let i=1;i<oddPage;i+=2)
      newOddIdx++;
    return newOddIdx;
  },

  mdataFromSort(priOrSec,mdata){
//TESTING
console.log('mdataFromSort',priOrSec,mdata);
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
          <div id="docsContainer">
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