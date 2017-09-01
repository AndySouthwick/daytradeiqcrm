
import React, { Component } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '../auth/Login'
import Auth from '../auth/Auth'
import Landing from '../crm/landing'
import SingleContact from '../crm/contact'

class App extends Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/login"/>}/>
                <Route path="/login" component={Login}/>
                <Route path="/app" component={Auth}/>
              <Route path="/contactmanager" component={Landing}/>
              <Route path="/contact/:id" component={SingleContact}/>

            </Switch>
        )
    }
}

export default App