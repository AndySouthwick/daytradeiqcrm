import React, { Component } from 'react'
import ContactForm from './form'
import ContactList from './contactlist'

class Landing extends Component{
  render(){
    return(
      <section>
        <ContactForm/>
        <ContactList/>
      </section>
    )
  }
}

export default Landing