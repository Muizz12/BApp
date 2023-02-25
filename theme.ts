import {configureFonts, DefaultTheme, Theme} from 'react-native-paper';
const fontConfig = {
  fontFamily: 'Poppins-Regular',
  bodyLarge: {
    letterSpacing: 0.5,
    lineHeight: 22,
    fontSize: 20,
  },
};
export const theme: Theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    accent: '#BBBBBB',
    backdrop: '#FFFFFF',
    background: '#FFFFFF',
    primary: '#BBBBBB',
    error: '#FF0000',
    notification: '#FFFFFF',
    onSurface: '#BBBBBB',
    placeholder: '#BBBBBB',
    surface: '#FFFFFF',
    text: '#000000',
    disabled: '#BBBBBB',
  },
  dark: false,
};
