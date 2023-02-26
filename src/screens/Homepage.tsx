import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Preview from '../components/preview';
import ProductComponent from '../components/productComponent';
import {PrimaryButtons} from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userToken} from '../GraphQl/variables';
import {useNavigation} from '@react-navigation/native';
import {GoogleSignin} from 'react-native-google-signin';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Homepage = () => {
  const navigation = useNavigation();
  const logout = async () => {
    try {
      await GoogleSignin.signOut();
      await AsyncStorage.removeItem('token');
      userToken(null);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };
  const data = [
    {
      id: 1,
      name: 'Shoes',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZIPKnRo0EDDY_o1AfOcHLy-18DJxjDV0JkX6e3mbM&s',
      iconName: 'foot',
      height: '70%',
      width: '100%',
    },
    {
      id: 2,
      name: 'Clothes',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwVU5IMHuRheJzCfr7dR-rW2yitN21BZxkQ&usqp=CAU',
      height: '75%',
      width: '50%',
    },
    {
      id: 3,
      name: 'Stationary',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdjeF63ZxFwtEGuAYh6Dgh_lNWx6H74iU5HA&usqp=CAU',
      height: '70%',
      width: '30%',
    },
    {
      id: 4,
      name: 'Furniture',
      image: 'https://cdn-icons-png.flaticon.com/512/2607/2607259.png',
      height: '70%',
      width: '40%',
    },
    {
      id: 5,
      name: 'Electronics',
      image: 'https://static.thenounproject.com/png/4474852-200.png',
      height: '70%',
      width: '40%',
    },
    {
      id: 6,
      name: 'Personal Care',
      image: 'https://cdn-icons-png.flaticon.com/512/2025/2025510.png',
      height: '70%',
      width: '30%',
    },
  ];
  const gotoDetail = (title: string) => {
    console.log('workin');
    navigation.navigate('detailstack', {
      screen: 'detail',
      params: {
        name: title,
      },
    });
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View style={{paddingHorizontal: 40}}>
        <PrimaryButtons title="Logout" onpress={logout} />
      </View>
      <View style={{paddingHorizontal: 20, marginVertical: 10}}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <ProductComponent
              title={item.name}
              image={item.image}
              iconName={item.iconName}
              gotoDetail={gotoDetail}
              height={item.height}
              width={item.width}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Homepage;

const styles = StyleSheet.create({});
