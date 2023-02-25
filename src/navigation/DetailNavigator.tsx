import React, {useRef} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SignUp from '../screens/Signup';
import BottomNavigator from './BottomNavigation';
import Detail from '../screens/Detail';

const detailStack = createNativeStackNavigator();
function DetailNavigator() {
  return (
    <detailStack.Navigator
      initialRouteName="detail"
      screenOptions={{headerShown: true}}>
      {/* <authStack.Screen name="bottomNavigatorStack" component={BottomNavigator} options={{ headerShown: false }} /> */}
      <detailStack.Screen
        name="detail"
        component={Detail}
        options={{headerShown: false}}
      />
    </detailStack.Navigator>
  );
}

export default DetailNavigator;
