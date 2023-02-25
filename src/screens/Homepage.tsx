import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Preview from '../components/preview';
import ProductComponent from '../components/productComponent';
import {PrimaryButtons} from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userToken} from '../GraphQl/variables';
import {useNavigation} from '@react-navigation/native';

const Homepage = () => {
  const navigation = useNavigation();
  const logout = async () => {
    try {
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
        'https://i.pinimg.com/736x/03/08/34/030834f7223ebfd68a5b7a0749b1659e.jpg',
    },
    {
      id: 2,
      name: 'Clothes',
      image:
        'https://media.istockphoto.com/id/621499082/photo/man-standing-in-street-wearing-denim-portrait.jpg?s=612x612&w=0&k=20&c=4anD9Gp9ZxxMS4aaGbCQNsGRQ0GDtOdtFVI3aeD9RMY=',
    },
    {
      id: 3,
      name: 'Food',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXMzBWyEwv3eXT-8wqY4CzCtSisuxQRabr-g&usqp=CAU',
    },
    {
      id: 4,
      name: 'Water',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXMzBWyEwv3eXT-8wqY4CzCtSisuxQRabr-g&usqp=CAU',
    },
    {
      id: 5,
      name: 'Tents',
      image:
        'https://cdn.thewirecutter.com/wp-content/media/2022/07/carfamilycampingtents-2048px-0313-3x2-1.jpg',
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
        alignItems: 'center',
        marginVertical: 20,
        flex: 1,
      }}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <ProductComponent
            title={item.name}
            image={item.image}
            gotoDetail={gotoDetail}
          />
        )}
        keyExtractor={item => item.id}
      />
      <View style={{paddingVertical: 5}}>
        <PrimaryButtons title="Logout" onpress={logout} />
      </View>
    </SafeAreaView>
  );
};

export default Homepage;

const styles = StyleSheet.create({});
