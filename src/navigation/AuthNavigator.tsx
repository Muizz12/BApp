import React, {useRef} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SignUp from '../screens/Signup';
import BottomNavigator from './BottomNavigation';

const authStack = createNativeStackNavigator();
function AuthNavigator() {
  return (
    <authStack.Navigator
      initialRouteName="login"
      screenOptions={{headerShown: true}}>
      {/* <authStack.Screen name="bottomNavigatorStack" component={BottomNavigator} options={{ headerShown: false }} /> */}
      <authStack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <authStack.Screen
        name="signup"
        component={SignUp}
        options={{headerShown: false}}
      />
      <authStack.Screen
        name="bottomNavigator"
        component={BottomNavigator}
        options={{headerShown: false}}
      />
    </authStack.Navigator>
  );
}

export default AuthNavigator;
