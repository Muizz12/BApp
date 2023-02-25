import {gql} from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(credentials: {email: $email, password: $password}) {
      id
      token
      email
    }
  }
`;

export const CREATE_CONSUMER = gql`
  mutation createConsumer($user: CredentialsInput!) {
    createConsumer(user: $user) {
      id
      token
      email
    }
  }
`;

export const CREATE_FORM = gql`
  mutation AddDataForm($createForm: FormDataInput!) {
    addDataForm(createForm: $createForm) {
      success
    }
  }
`;
