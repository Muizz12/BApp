import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {PrimaryButtons, SecondryButtons} from '../components';
import CredentialForm from '../components/CredentialForm';
import {CredentialsType} from '../types';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../GraphQl/mutations';
import {useMutation} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userToken} from '../GraphQl/variables';
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
