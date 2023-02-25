import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {PrimaryButtons} from './buttons';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {CredentialsType} from '../types';
import {useForm, Controller} from 'react-hook-form';
import {ErrorText} from './texts';
import {theme} from '../../theme';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import {useFocusEffect} from '@react-navigation/native';

const schema = yup
  .object({
    name: yup.string().required('Please enter the name'),
    model: yup.string().required('Please enter the model'),
    quantity: yup.string().required('Please  enter the quantity'),
    date: yup.string().required('Please  enter the  Date'),
    amount: yup.string().required('Please  enter the amount '),
  })
  .required();

interface CredentialFormValue {
  submit: (data: CredentialsType) => void;
  name: string;
}

const DetailForm = ({submit, name}: CredentialFormValue) => {
  const [open, setOpen] = React.useState(false);
  console.log('Name===', name);
  const {
    control,
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<any>({
    resolver: yupResolver(schema),
  });

  useFocusEffect(
    React.useCallback(() => {
      console.log('workin');
      reset({
        model: name,
      });
    }, [name]),
  );

  return (
    <View style={{paddingHorizontal: 20}}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Enter name"
            value={value}
            onChangeText={inputValue => onChange(inputValue)}
          />
        )}
        name="name"
      />
      <ErrorText title={errors.name?.message} />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Enter model"
            value={value}
            editable={false}
            onChangeText={inputValue => onChange(inputValue)}
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
            value={value}
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
          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Date"
              style={{width: '100%'}}
              editable={false}
              theme={{
                colors: {
                  text: theme.colors.text,
                },
              }}
              right={
                <TextInput.Icon
                  icon="calendar"
                  size={28}
                  color={'#4C9AB4'}
                  onPress={() => setOpen(true)}
                />
              }
              selectTextOnFocus={false}
              placeholderTextColor="#4C9AB4"
              value={value ? moment(value).format('DD/MM/YYYY') : 'Date'}
              // onChangeText={text => onChange(text)}
            />
            <DatePicker
              modal
              mode="date"
              open={open}
              date={new Date()}
              onConfirm={(date: any) => {
                setOpen(false);
                onChange(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </TouchableOpacity>
        )}
        name="date"
      />

      <ErrorText title={errors.date?.message} />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Enter Total Amount"
            value={value}
            onChangeText={inputValue => onChange(inputValue)}
          />
        )}
        name="amount"
      />
      <ErrorText title={errors.amount?.message} />

      <View style={{marginTop: 20, paddingHorizontal: 20, paddingVertical: 10}}>
        <PrimaryButtons title="Submit" onpress={handleSubmit(submit)} />
      </View>
    </View>
  );
};

export default DetailForm;

const styles = StyleSheet.create({});
