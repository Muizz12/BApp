import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Splash = () => {
  return (
    // <ImageBackground source={require('../assets/images/Rectangle4.png')} style={styles.imageBackgroundStlye}>
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <Text>App</Text>
    </SafeAreaView>
    // </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  imageBackgroundStlye: {
    width: '100%',
    height: '100%',
  },
  safeAreaViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
  },
});
