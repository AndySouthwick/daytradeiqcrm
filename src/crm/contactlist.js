import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getContacts } from './service'
import {Container, Row, Col, Button} from 'reactstrap'
import { Redirect } from 'react-router-dom'
import { withApollo } from 'react-apollo'
import {connect} from 'react-redux'
import {getAllContacts} from './actions'
import { Link } from 'react-router-dom'

class ContactList extends Component{


  // componentWillMount() {
  //   this.storeContactsInState()
  // }
  //
  // storeContactsInState () {
  //   this.props.client.query({
  //     query: getContacts
  //   }).then((resp) => {
  //     console.log(resp.data.allContacts)
  //     this.props.dispatch(getAllContacts(resp.data.allContacts))
  //   }).catch((error) => {
  //     console.error(error)
  //   })
  // }




  render() {
    console.log(this.props.given_name)
    if(this.props.token === null) {
      return <Redirect to="/login"/>
    }



    if (!this.props.data) {
      return null
    }

    if (this.props.data.loading) {
      return <h1>Loading it up</h1>
    }

    // if (this.props.data){
    //   this.storeContactsInState()
    // }



    return(


      <div>
        {this.props.given_name}
        <ul>
          {this.props.data.allContacts.map((contact) => <li key={contact.id}><Link to={`/contact/${contact.id}`}><h2 >{contact.given_name} {contact.phone}</h2></Link></li>)}
        </ul>
        </div>
    )
  }
}
//
// const mapStateToProps = (state) => {
//   console.log(state)
//   return{
//     given_name: state.contact.allContactInfo
//   }
//}

// const withApolloClient = withApollo(ContactList)
// const withReduxConnection = connect(mapStateToProps)(withApolloClient)
// export default withReduxConnection

export default graphql(getContacts, {
  fetchPolicy: 'network-only'
})(ContactList)