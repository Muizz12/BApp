import React, {useState, useEffect} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import UserContext from './src/context/user';
import RootNavigator from './src/navigation/RootNavigator';
import {Provider as PaperProvider} from 'react-native-paper';
import {UserType} from './src/types';
import {ApolloProvider, useReactiveVar} from '@apollo/client';
import client from './src/GraphQl/client';
import {globalError, userToken} from './src/GraphQl/variables';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import Snackbar from 'react-native-snackbar';
// import Toast from 'react-native-simple-toast';
import {theme} from './theme';

const App = () => {
  const [user, setUser] = useState<UserType | null>();
  const [error, setError] = useState<string | undefined>();
  const graphqlGlobalError = useReactiveVar(globalError);

  console.log('graphqlGlobalError===>', graphqlGlobalError);
  useEffect(() => {
    splashTimer();
  }, []);

  useEffect(() => {
    if (graphqlGlobalError?.message) {
      // showMessage({
      //   message: graphqlGlobalError?.message,
      //   type: "danger",
      //   icon: () => <FontAwesome5 name="exclamation-triangle" size={20} style={{ justifyContent: "flex-start", alignItem: "center", color: "white", paddingBottom: 20, marginRight: 30 }} />
      // })
      // Toast.showWithGravity("sdsds", Toast.LONG, Toast.TOP, { backgroundColor: "red" });
      Snackbar.show({
        text: graphqlGlobalError?.message,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: 'red',
        textColor: 'white',
      });
    }
  }, [graphqlGlobalError]);

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      userToken(token);
    } catch (e: any) {
      console.log('error', e.message);
    }
  };
  const bootstrap = () => {
    setUser(null);
    console.log('working');
  };

  const splashTimer = () => setTimeout(getToken, 5000);

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={user}>
        <NavigationContainer>
          <PaperProvider theme={theme}>
            <RootNavigator />
          </PaperProvider>
        </NavigationContainer>
      </UserContext.Provider>
    </ApolloProvider>
  );
};

export default App;
