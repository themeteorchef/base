// This container brings in Apollo GraphQL data
export default mapQueriesToProps = ({ownProps,state}) => (
//TESTING
//console.log('mapQueriesToProps',arguments);
//TESTING
  {
    getDocs: {
      query: gql`
        query getBios($offset:Int!,$limit:Int!){
          bios(offset:$offset,limit:$limit){
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
        offset:0,//OFFSET,
        limit:10//LIMIT
      },
      forceFetch: false,
      returnPartialData:false
    }
  }
);