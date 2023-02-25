import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {PrimaryButtons} from './buttons';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {CredentialsType} from '../types';
import {useForm, Controller} from 'react-hook-form';
import {ErrorText} from './texts';

const schema = yup
  .object({
    emailAddress: yup.string().email().required('Please Enter Your Email'),
    password: yup.string().required('Please Enter the Password'),
  })
  .required();

interface CredentialFormValue {
  submit: (data: CredentialsType) => void;
}

const CredentialForm = ({submit}: CredentialFormValue) => {
  const {
    control,
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<CredentialsType>({
    resolver: yupResolver(schema),
  });
  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Email Address"
            autoCapitalize="none"
            selectTextOnFocus={false}
            onChangeText={inputValue => onChange(inputValue)}
            style={{backgroundColor: 'transparent'}}
          />
        )}
        name="emailAddress"
      />
      <ErrorText title={errors.emailAddress?.message} />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Enter your password"
            secureTextEntry={true}
            onChangeText={inputValue => onChange(inputValue)}
          />
        )}
        name="password"
      />
      <ErrorText title={errors.password?.message} />

      <View style={{marginTop: 20}}>
        <PrimaryButtons title="Login" onpress={handleSubmit(submit)} />
      </View>
    </View>
  );
};

export default CredentialForm;

const styles = StyleSheet.create({});
