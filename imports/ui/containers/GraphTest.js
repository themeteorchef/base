import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import GraphTest from '../pages/GraphTest';

const MyQuery = gql`
  query ($userId: String!) {
    documents {
      title
    }
    users(_id: $userId) {
      firstName
    }
  }
`;

export default graphql(MyQuery, {
  options: {
    variables: {
      userId: 'st7KzC3Z7j4c59WFq',
    },
  },
})(GraphTest);
