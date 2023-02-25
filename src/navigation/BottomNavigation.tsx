import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Homepage from '../screens/Homepage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Detail from '../screens/Detail';

const bottomTab = createBottomTabNavigator();

const BottomNavigator = () => {
  let iconName: any;
  return (
    <bottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
        },
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Events') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4C9AB4',
        tabBarInactiveTintColor: '#4C9AB4',
      })}>
      <bottomTab.Screen
        name="Home"
        component={Homepage}
        options={{
          // tabBarIcon: ({ color, size }) => (
          //     // <Ionicons name="home" size={size} color={color} />
          //     <HomeIcon />
          // ),
          headerShown: false,
        }}
      />
      <bottomTab.Screen
        name="detail"
        component={Detail}
        options={{
          // tabBarIcon: ({ color, size }) => (
          //     // <Ionicons name="home" size={size} color={color} />
          //     <HomeIcon />
          // ),
          headerShown: false,
          tabBarButton: () => null,
        }}
      />
    </bottomTab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
