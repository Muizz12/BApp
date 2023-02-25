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
    model: yup.string().email().required('Please the model'),
    quantity: yup.string().required('Please  the quantity'),
    import: yup.string().required('Please  the import Year'),
  })
  .required();

interface CredentialFormValue {
  submit: (data: CredentialsType) => void;
}

const DetailForm = ({submit}: CredentialFormValue) => {
  const {
    control,
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<any>({
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
            placeholder="Model"
            autoCapitalize="none"
            onChangeText={inputValue => onChange(inputValue)}
            selectTextOnFocus={false}
            style={{backgroundColor: 'transparent'}}
          />
        )}
        name="model"
      />
      <ErrorText title={errors.model?.message} />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Enter Quantity"
            onChangeText={inputValue => onChange(inputValue)}
          />
        )}
        name="quantity"
      />
      <ErrorText title={errors.quantity?.message} />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Enter Import Year"
            onChangeText={inputValue => onChange(inputValue)}
          />
        )}
        name="import"
      />
      <ErrorText title={errors.import?.message} />

      <View style={{marginTop: 20}}>
        <PrimaryButtons title="Submit" onpress={handleSubmit(submit)} />
      </View>
    </View>
  );
};

export default DetailForm;

const styles = StyleSheet.create({});
