import "intl";
import 'intl/locale-data/jsonp/en'; // or any other locale you need

import * as yup from 'yup';

export const FieldValidationSchema = {
  email: yup.string().email('Invalid e-mail address').required('E-Mail address is required'),
  password: yup.string()
    .required('Password required')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Password must contain at least 8 characters, of which 1 uppercase, 1 lowercase, 1 number and 1 special character',
    ),
  confirm_password: yup.string()
    .oneOf([yup.ref('password'), null], 'The passwords do not match'),
  oldPassword: yup.string()
    .required('Please enter your old password')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Password must contain at least 8 characters, of which 1 uppercase, 1 lowercase, 1 number and 1 special character',
    ),
  newPassword: yup.string()
    .required('Enter your new password')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Password must contain at least 8 characters, of which 1 uppercase, 1 lowercase, 1 number and 1 special characte',
    ),
  firstName: yup.string().required('First name required'),
  lastName: yup.string().required('Last name required'),
  zipCode: yup.string().length(5, 'Please check your zip code').required('Please check your zip code'),
  checkbox: yup.bool().oneOf([true], 'Please accept our terms and conditions'),
};

export function formatTime(date: any) {
  const newDate = new Date(date);
  const time = new Intl.DateTimeFormat('en-Us', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  const formatedTime = time.format(newDate);
  return formatedTime;
}
export function formatDate(date: any) {
  const newDate = new Date(date);
  const formatedDate = new Intl.DateTimeFormat().format(newDate);
  return (formatedDate);
}