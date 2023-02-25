import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {DetailText, VenueName} from './texts';
import {useNavigation} from '@react-navigation/native';
import {productname} from '../GraphQl/variables';
interface ProductComponentProps {
  image?: string | undefined;
  title: string;
  gotoDetail: (title: string) => void;
}
const ProductComponent = ({
  image,
  title,
  gotoDetail,
}: ProductComponentProps) => {
  const navigation = useNavigation();
  console.log('image====>', typeof image);
  if (typeof image !== 'string') {
    throw new Error('Invalid image path');
  }
  return (
    <TouchableOpacity style={{width: '100%'}} onPress={() => gotoDetail(title)}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          ...styles.imageStyle,
        }}
      />
      <VenueName title={title} />
    </TouchableOpacity>
  );
};

export default ProductComponent;

const styles = StyleSheet.create({
  imageStyle: {
    width: 400,
    height: 325,
    zIndex: -1,
    marginVertical: 20,
  },
});
