import {Platform} from 'react-native';

const fonts = {
  // OpenSansBold: Platform.OS === 'ios' ? 'OpenSans-Bold' : 'OpenSans-Bold',
  // OpenSansBoldItalic: Platform.OS === "ios" ? "OpenSans-BoldItalic" : "OpenSans-BoldItalic",
  // OpenSansExtraBold: Platform.OS === 'ios' ? 'OpenSans-ExtraBold' : 'OpenSans-ExtraBold',
  // OpenSansExtraBolditalic: Platform.OS === 'ios' ? 'OpenSans-ExtraBolditalic' : 'OpenSans-ExtraBolditalic',
  // OpenSansItalic: Platform.OS === 'ios' ? 'OpenSans-Italic' : 'OpenSans-Italic',
  // OpenSansLight: Platform.OS === 'ios' ? 'OpenSans-Light' : 'OpenSans-Light',
  // OpenSansLightitalic: Platform.OS === 'ios' ? 'OpenSans-LightItalic' : 'OpenSans-LightItalic',
  // OpenSansRegular: Platform.OS === 'ios' ? 'OpenSans' : 'OpenSans-Regular',
  // OpenSansSemibold: Platform.OS === 'ios' ? 'OpenSans-Semibold' : 'OpenSans-Semibold',
  // OpenSansSemiboldItalic: Platform.OS === 'ios' ? 'OpenSans-SemiboldItalic' : 'OpenSans-SemiboldItalic',

  Poppins:  Platform.OS === 'ios' ? 'Poppins' : 'Poppins-Regular',
  PoppinsBold: Platform.OS === 'ios' ? 'Poppins-Bold' : 'Poppins-Bold',

};
export default fonts;
