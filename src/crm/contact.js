import React, { Component } from 'react'
import { getContact } from './service'
import {graphql} from 'react-apollo'
import {Container, Row, Col, Button} from 'reactstrap'

class SingleContact extends Component{



  componentWillUpdate() {
    if (this.props.data.Contact !== undefined){
      console.log(this.props.data.Contact)
    }
  }
//
//
//   getContactFromServer () {
//     if(this.props.match.params.id!== null){
//
//       const contactId = this.props.match.params.id
//       console.log(contactId)
//       this.props.client.query({
//         query: getContact,
//         variables: {
//           id: 3
//         }
//       })
//
//     }
// }


  render(){



    return(
      <div>


      </div>
    )
  }
}
export default graphql(getContact,{
  options: (props) => ({ variables: { id: props.match.params.id } })
      }
)(SingleContact)