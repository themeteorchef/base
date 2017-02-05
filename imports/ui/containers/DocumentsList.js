import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import DocumentsList from '../components/DocumentsList.js';

const MyQuery = gql`
  query {
    documents {
      _id
      title
    }
  }
`;

export default graphql(MyQuery, {
  options: {
    pollInterval: 10000,
  },
})(DocumentsList);
