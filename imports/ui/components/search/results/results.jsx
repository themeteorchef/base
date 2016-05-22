import React from 'react';
import { connect } from 'react-apollo';

import InfiniteResults from './infinite';
import { Loading } from '../../../components/loading';

const LIMIT = 10;
const OFFSET = 0;

function List({ postsData }) {
//TESTING
console.log('List',postsData);
//TESTING
  let refetch = (os)=>{
//TESTING
console.log('refetch',arguments,os);
//TESTING
postsData.refetch({limit:LIMIT,os:os});
};
  return (
//postsData.loading?<Loading />:
!postsData.bio?<Loading />:
<InfiniteResults results={postsData} refetch={refetch} />
/*    <div className="container-main">
      <h1> Fortune Cookie </h1>
      <div className="flex-grid">
        {bio && bio.map(({descrip}, index) => {
          return (
            <div key={index} className="container-centered grit">
              <p>"{descrip}"</p>
            </div>
          );
        })}
      </div>
    </div>*/
  )
}

// This container brings in Apollo GraphQL data
function mapQueriesToProps({ownProps,state}) {
//TESTING
console.log('mapQueriesToProps',arguments);
//TESTING
//let limit = 5, os = 20;
    return {
      postsData: {
        query: gql`
query getBios($limit:Int!,$os:Int!){
  bio(limit:$limit,os:$os){
    count
    rows {
      id
      stamp_utc
      doc
      descrip
    }
  }
}
          `,
      variables: {
        limit:LIMIT,
        os:OFFSET
      },
      forceFetch: false,
      returnPartialData:false
      }
    };
  };

const Results = connect({
mapQueriesToProps
})(List);

export default Results;