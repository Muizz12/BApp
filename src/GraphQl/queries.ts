import { gql, useQuery } from '@apollo/client';

export const GET_VERIFICATION = gql`
query getVerification($id: ID!){
    getVerification(id:$id){
        id
        firstName
        lastName
        email
        password
        dateOfBirth
        gender
        otp
    }
}
`
export const GET_USER_PROFILE = gql`
query getUserProfile{
    getUserProfile{
        id
        userId
        firstName
        lastName
        emailAddress
        dateOfBirth
        gender
    }
}
`