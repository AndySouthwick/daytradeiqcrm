import { gql } from 'react-apollo'


export const getContacts = gql`  
  query someQuery {
    allContacts {
      id
      given_name
      email
      phone
      family_name
    }
     
    
  }
  
`

export const getContact = gql`  
  query contactQuery($id: Int!){
    Contact(id: $id){
      id
      given_name
    }
  }
`



export const createNewContact = gql`
  mutation(
  $given_name: String!
  $family_name: String
  $email: String!
  $phone: String!
  $affiliate_id: Int!
  ) {
    createContact(
      given_name: $given_name
      family_name: $family_name
      email: $email
      phone: $phone
      affiliate_id: $affiliate_id
    ){
      id
    },
  }
`
