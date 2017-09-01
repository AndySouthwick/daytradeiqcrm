import React, {Component} from 'react'
import { graphql } from 'react-apollo'
import {Form, FormGroup, Input, Button} from 'reactstrap'
import { createNewContact } from './service'

class ContactForm extends Component {

  constructor () {
    super()
    this.state = {
      affiliate_id: '',
      given_name: '',
      family_name: '',
      email: '',
      phone: ''
    }
  }
  f
  addContact = (evt) => {
    console.log(this.state.given_name)
    evt.preventDefault()
    this.props.mutate({
      variables: {
        affiliate_id: 1,
        given_name: this.state.given_name,
        family_name: this.state.family_name,
        email: this.state.email,
        phone: this.state.phone
      }
    })
  }


  render(){
    return(
      <Form onSubmit={this.addContact}>
        <FormGroup >
          <Input type="text" onChange={(evt) => this.setState({ given_name: evt.target.value }) } placeholder="First Name" />
        </FormGroup>
        <FormGroup>
          <Input type="text" onChange={(evt) => this.setState({ family_name: evt.target.value }) } placeholder="Last Name" />
        </FormGroup>
        <FormGroup>
          <Input type="text" onChange={(evt) => this.setState({ email: evt.target.value }) } placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Input type="text" onChange={(evt) => this.setState({ phone: evt.target.value }) } placeholder="Phone" />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    )

  }
}

export default graphql(createNewContact)(ContactForm)