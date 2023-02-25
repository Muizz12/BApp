import { gql } from '@apollo/client'

export const LOGIN = gql`
 mutation login(
     $email:String!
     $password:String!
 ){
     login(
        credentials: {email: $email, password: $password}
     ){
        id
        token
        email
     }
     
 }
`;

export const VERIFICATION = gql`
mutation addVerification($verificationInput: VerificationInput!)
{
    addVerification(verificationInput:$verificationInput){
       token
    }
}`

export const CREATE_CONSUMER = gql`
mutation createConsumer(
    $user: CredentialsInput!
    ){
        createConsumer(user:$user){
            success
        }
}`

export const VERIFY_AND_CREATE_CONSUMER = gql`
mutation verifyAndCreateCon($otp: String! $token: String!){
    verifyAndCreateCon(otp:$otp,token:$token){
        token
   

    }
}
`
export const FORGOT_PASSWORD = gql`
mutation forgotPassword ($email:String!){
    forgotPassword(email:$email){
        token
    }
}`

export const UPDATE_PASSWORD = gql`
mutation updatePassword(
    $password: String!
    $otp: String!
    $token: String!
    ){
        updatePassword(password:$password,otp:$otp,token:$token){
            success
        } 
}`

export const UPDATE_USER_PROFILE = gql`
mutation UserProfileUpdate($id: ID!
    $userProfileUpdate: UserProfileUpdate!){
        UserProfileUpdate(id:$id,userProfileUpdate:$userProfileUpdate){
            success
        }
    }
`

// export const RESEND_VERIFICATION = gql`
// mutation resendVerificationCode($Token: String!){
//     resendVerificationCode(Token:$Token){
//         success
//     }
// }
// `

export const RESEND_VERIFICATION = gql`
mutation resendVerificationCode ($token:String!){
    resendVerificationCode(token:$token){
        success
    }
}
`

export const CHANGE_PASSWORD = gql`
mutation changePassword($currentPassword: String! $newpassword: String!){
    changePassword(currentPassword:$currentPassword newpassword:$newpassword)
        {
            success
        }
    }
`

export const CHANGE_EMAIL_SEND_OTP = gql`
mutation changeEmailSendOtp($email: String!){
    changeEmailSendOtp(email:$email){
        token
    }
}`

export const CHANGE_EMAIL = gql`
mutation changeEmail($otp: String!
    $token: String!
    $newEmail: String!){
        changeEmail(otp:$otp,token:$token,newEmail:$newEmail){
            success
        }
    }`
