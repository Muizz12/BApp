import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {PrimaryButtons, SecondryButtons} from '../components';
import CredentialForm from '../components/CredentialForm';
import {CredentialsType} from '../types';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const submit = (data: CredentialsType) => {
    console.log(data);
    navigation.navigate('bottomNavigator', {
      screen: 'home',
    });
  };
  return (
    <SafeAreaView>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 40}}>
        <Text style={{fontSize: 40}}>Login</Text>
      </View>
      <CredentialForm submit={submit} />
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
