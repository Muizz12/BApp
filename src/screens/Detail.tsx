import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PrimaryText} from '../components';
import DetailForm from '../components/DetailForm';

const Detail = ({route}) => {
  const {title} = route.params;
  const submit = (data: any) => {
    console.log(data);
  };
  return (
    <SafeAreaView>
      <View style={{alignItems: 'center'}}>
        <PrimaryText title={title} />
      </View>
      <DetailForm submit={submit} />
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({});
