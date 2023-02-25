import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CredentialForm from '../components/CredentialForm';
import {CredentialsType} from '../types';
import {SecondryButtons} from '../components';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const submit = (data: CredentialsType) => {
    console.log(data);
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 40}}>
        <Text style={{fontSize: 40}}>SignUp</Text>
      </View>
      <CredentialForm submit={submit} />
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <SecondryButtons
          title="Go To Login"
          onpress={() => navigation.navigate('login')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
