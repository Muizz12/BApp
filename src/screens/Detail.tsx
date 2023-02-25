import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {PrimaryText} from '../components';
import DetailForm from '../components/DetailForm';
import {useMutation, useReactiveVar} from '@apollo/client';
import {CREATE_FORM} from '../GraphQl/mutations';
import {useNavigation} from '@react-navigation/native';
import {productname} from '../GraphQl/variables';
import Snackbar from 'react-native-snackbar';

const Detail = ({route}) => {
  const navigation = useNavigation();
  const [createForm, {data, loading, error}] = useMutation(CREATE_FORM);
  const {name} = route?.params;
  // const name = useReactiveVar(productname);
  console.log(name);
  const submit = async (data: any) => {
    console.log(data);
    const createFormdata = {
      amount: data.amount,
      model: data.model,
      name: data.name,
      quantity: data.quantity,
      year: data.date,
    };
    console.log(createForm);
    try {
      const result = await createForm({
        variables: {
          createForm: createFormdata,
        },
      });
      if (result) {
        Snackbar.show({
          text: `Thank you for donating the${name}`,
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'green',
          textColor: 'white',
        });
        navigation.navigate('Home');
      }
    } catch (error) {}
  };
  if (loading) {
    return (
      <SafeAreaView
        style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <View style={{alignItems: 'center'}}>
        <PrimaryText title={'Please Fill the Form'} />
      </View>
      <DetailForm submit={submit} name={name} />
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({});
