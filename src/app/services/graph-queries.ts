import gql from 'graphql-tag';

export const UsersQuery = gql`
  query allUsers($first: Int) {
    viewer {
      users(first: $first) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`;

export const MeQuery = gql`
  query me {
    viewer {
      me {
        id
        name
        email
      }
    }
  }
`;

export const LogInMutation = gql`
  mutation logIn($email: String!, $password: String!) {
    LoginEmail(input: {email: $email, password: $password}) {
      clientMutationId
      token
      error
    }
  }
`;

export const AddUserMutation = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    RegisterEmail(input: {name: $name, email: $email, password: $password}) {
      clientMutationId
      token
      error
    }
  }
`;




