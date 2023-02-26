import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {DetailText, VenueName} from './texts';
import {useNavigation} from '@react-navigation/native';
import {productname} from '../GraphQl/variables';
interface ProductComponentProps {
  image?: string | undefined;
  title: string;
  gotoDetail: (title: string) => void;
  iconName?: string;
  height?: string;
  width?: string;
}
const ProductComponent = ({
  image,
  title,
  iconName,
  gotoDetail,
  width,
  height,
}: ProductComponentProps) => {
  const navigation = useNavigation();
  console.log('image====>', typeof image);
  if (typeof image !== 'string') {
    throw new Error('Invalid image path');
  }
  return (
    <TouchableOpacity
      style={{
        margin: 20,
        maxHeight: 150,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
        backgroundColor: 'white',
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.3,

        elevation: 13,
      }}
      onPress={() => gotoDetail(title)}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: width,
          height: height,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '5%',
          paddingBottom: '10%',
        }}
      />

      <View style={{marginTop: 10, marginBottom: 10}}>
        <VenueName title={title} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductComponent;

const styles = StyleSheet.create({});
