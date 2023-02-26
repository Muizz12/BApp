import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {PrimaryButtons, PrimaryText, SecondryButtons} from '../components';
import CredentialForm from '../components/CredentialForm';
import {CredentialsType} from '../types';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../GraphQl/mutations';
import {useMutation} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userToken} from '../GraphQl/variables';
import {GoogleSignin, statusCodes} from 'react-native-google-signin';

const Login = () => {
  const [login, {data, loading, error}] = useMutation(LOGIN);

  const navigation = useNavigation();
  const storeToken = async (token: string) => {
    try {
      await AsyncStorage.setItem('token', token);
      userToken(token);
    } catch (error) {
      // Error saving data
    }
  };

  React.useEffect(() => {
    GoogleSignin.configure();
  }, []);
  const submit = async (value: CredentialsType) => {
    try {
      await login({
        variables: {
          email: value.emailAddress,
          password: value.password,
        },
      });
    } catch (error) {
      console.log(error);
    }

    // navigation.navigate('bottomNavigator', {
    //   screen: 'home',
    // });
  };
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('UserInfot=====>', userInfo.idToken);
      storeToken(`${userInfo?.idToken}`);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('error', error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
        console.log('error', error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('error', error);
      } else {
        console.log('error', error);
        // some other error happened
      }
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }
  if (data) {
    console.log(data?.login?.token);
    storeToken(data?.login?.token);
  }
  return (
    <SafeAreaView style={{paddingHorizontal: 20}}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 40}}>
        <Text style={{fontSize: 40}}>Login</Text>
      </View>
      <CredentialForm submit={submit} title="Login" />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <PrimaryText title="OR" />
      </View>
      <View style={{paddingHorizontal: 20}}>
        <PrimaryButtons title="Sign in with Google" onpress={signIn} />
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <SecondryButtons
          title="Go To SignUp"
          onpress={() => navigation.navigate('signup')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
