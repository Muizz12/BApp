import * as yup from 'yup';

export const Schema = {
    emailAddress: yup.string().email().required("Please Enter Your Email"),
    password: yup.string().required("Please Enter the Password"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Your Password Does not Match'),
    firstName: yup.string().email().required("Please Enter Your First Name"),
    lastName: yup.string().email().required("Please Enter Your Last Name"),
    dateOfBirth: yup.string().required("Please Enter Your Date Of Birth"),
    gender: yup.string().required("Please Enter Your Gender"),
};