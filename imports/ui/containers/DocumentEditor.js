import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import DocumentEditor from '../components/DocumentEditor';

const editDocument = gql`
  mutation updateDocument($_id: String!, $title: String!, $body: String!) {
    updateDocument(_id: $_id, title: $title, body: $body) {
      _id
      title
      body
    }
  }
`;

export default graphql(editDocument)(DocumentEditor);
