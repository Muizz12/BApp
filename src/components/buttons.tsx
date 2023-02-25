import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Button, IconButton, Text} from 'react-native-paper';
interface ButtonsProps {
  title: string;
  onpress: () => void;
}
export const PrimaryButtons = (props: ButtonsProps) => {
  const {title, onpress} = props;
  return (
    <TouchableOpacity onPress={onpress} style={styles.PrimaryButtonsStyle}>
      <Text style={{color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export const SecondryButtons = (props: ButtonsProps) => {
  const {title, onpress} = props;
  return (
    <TouchableOpacity onPress={onpress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export const TextButtons = (props: ButtonsProps) => {
  const {title, onpress} = props;
  return (
    <TouchableOpacity onPress={onpress}>
      <Text style={styles.dontHaveAnAccountTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export const ContinueButton = (props: ButtonsProps) => {
  const {title, onpress} = props;
  return (
    <TouchableOpacity onPress={onpress} style={styles.continueIcon}>
      <Text style={{fontWeight: '500'}}>{title}</Text>
      <IconButton icon={'chevron-right'} color="#4C9AB4" />
    </TouchableOpacity>
  );
};

export const BackButton = (props: ButtonsProps) => {
  const {title, onpress} = props;
  return (
    <TouchableOpacity onPress={onpress} style={styles.continueIcon}>
      <IconButton icon={'chevron-left'} color="#4C9AB4" />
      <Text style={{fontWeight: '500'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export const TopNavigationBackButton = (props: ButtonsProps) => {
  const {title, onpress} = props;
  return (
    <TouchableOpacity onPress={onpress} style={styles.continueIcon}>
      <View style={styles.headingNavigationStyle}>
        <IconButton icon="chevron-left" />
        <Text style={styles.headingTextStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  PrimaryButtonsStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: '#4C9AB4',
  },
  dontHaveAnAccountTextStyle: {
    color: '#4C9AB4',
  },
  continueIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingNavigationStyle: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  backIconStyle: {color: 'black', fontSize: 20, fontWeight: 'bold'},
  headingTextStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 28,
  },
});
