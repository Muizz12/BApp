import {
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache,
  useReactiveVar,
} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import {globalError} from './variables';
import {setContext} from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const errorLink = onError(({graphQLErrors, networkError}) => {
  console.log('graphQLErrors', graphQLErrors);
  let messageVar: string | null = null;
  let multiErrors;
  if (graphQLErrors) {
    messageVar = graphQLErrors
      .map(
        ({message}) =>
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          ` ${message}`,
      )
      .join(', ');
    const objMessage = messageVar;
    multiErrors = objMessage
      ?.split(',')
      .find(currentValue => currentValue.includes('detail'));
    globalError({message: objMessage});
  }
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
});

// const getToken = async () => {
//     try {
//         const token = await AsyncStorage.getItem('token')

//     } catch (e) {
//         // error reading value
//     }
// }
const authLink = setContext(async (_, {headers}) => {
  const token = await AsyncStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? token : '',
    },
  };
});
const httpLink = new HttpLink({uri: 'http://localhost:3000/graphql'});

const client = new ApolloClient({
  link: from([errorLink, authLink.concat(httpLink)]),
  cache: new InMemoryCache(),
});
export default client;
