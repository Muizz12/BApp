import {useReactiveVar} from '@apollo/client';
import {userToken} from '../GraphQl/variables';
import React from 'react';

import SplashScreen from '../screens/Splash';
import AuthNavigator from './AuthNavigator';
import BottomNavigator from './BottomNavigation';

function RootNavigator() {
  const getToken = useReactiveVar(userToken);
  console.log('USERTOKEN=======>', typeof getToken);
  if (getToken === undefined) return <SplashScreen />;
  if (getToken === null) return <AuthNavigator />;
  return <BottomNavigator />;
}

export default RootNavigator;
