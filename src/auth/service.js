import { gql } from 'react-apollo'


class AuthService {
    loginUser = gql`
        mutation SignInUser (
        $email: String!
        $password: String!)
        {
          loginUser (
          email: $email
          password: $password
        ){
            token
          }
        }
    `
  getLoggedInUser = gql`
       query {
  loggedInUser {
    email
  }
}
    `
}

export default new AuthService()