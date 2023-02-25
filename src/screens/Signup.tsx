import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CredentialForm from '../components/CredentialForm';
import {CredentialsType} from '../types';
import {SecondryButtons} from '../components';
import {useNavigation} from '@react-navigation/native';
import {useMutation} from '@apollo/client';
import {CREATE_CONSUMER} from '../GraphQl/mutations';
import {ActivityIndicator} from 'react-native-paper';
import SignUpForm from '../components/singupForm';

const SignUp = () => {
  const navigation = useNavigation();
  //mutaionStartHere

  const [createConsumer, {data, loading, error}] = useMutation(CREATE_CONSUMER);

  //mutationEndsHere
  const submit = async (data: CredentialsType) => {
    console.log(data);
    try {
      await createConsumer({
        variables: {
          user: {
            email: data.emailAddress,
            password: data.password,
          },
        },
      });
    } catch (error) {
      console.log(error);
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
    navigation.navigate('login');
  }
  return (
    <SafeAreaView style={{paddingHorizontal: 20}}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 40}}>
        <Text style={{fontSize: 40}}>SignUp</Text>
      </View>
      <SignUpForm submit={submit} title="Signup" />
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
