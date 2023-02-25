import React from 'react';
import {StyleSheet} from 'react-native';
import {Title, useTheme, Text} from 'react-native-paper';
import {theme} from '../../theme';

interface TextProps {
  title: string | undefined;
  overrideStyles?: any;
  color?: string;
}

export const PrimaryText = ({title, overrideStyles = {}}: TextProps) => {
  const {fonts} = useTheme();
  return <Title style={styles.primaryTextStyle}>{title}</Title>;
};

export const SecondryText = ({title}: TextProps) => {
  const {fonts} = useTheme();
  return <Text style={styles.secondryTextStyle}>{title}</Text>;
};

export const AcentText = ({title}: TextProps) => {
  return <Text style={styles.acentTextStyle}>{title}</Text>;
};

export const HeadinText = ({title}: TextProps) => {
  return <Title style={styles.headingTextStyle}>{title}</Title>;
};

export const DetailText = ({title}: TextProps) => {
  return <Title style={styles.detailTextStyle}>{title}</Title>;
};

export const VenueName = ({title}: TextProps) => {
  return <Title style={styles.venueNameTextStyle}>{title}</Title>;
};

export const OutlineText = (props: TextProps) => {
  const {title} = props;
  return <Text>{title}</Text>;
};

export const ErrorText = (props: TextProps) => {
  const {title} = props;
  return <Text style={styles.errorText}>{title}</Text>;
};
const styles = StyleSheet.create({
  primaryTextStyle: {
    color: 'black',
    fontWeight: 'bold',
  },
  headingTextStyle: {
    color: '#BCE6E2',
  },
  detailTextStyle: {
    color: 'white',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '400',
  },
  venueNameTextStyle: {
    color: 'black',
    fontSize: 25,
    lineHeight: 24,
    fontWeight: '700',
  },
  errorText: {
    color: 'red',
  },
  secondryTextStyle: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  acentTextStyle: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: theme.colors.accent,
  },
});
