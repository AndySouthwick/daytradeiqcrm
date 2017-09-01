import { combineReducers } from 'redux'

import client from '../client'

import * as authReducer from '../auth/reducer'
import * as contactReducer from '../crm/reducer'

export const initialState = {
  contact: contactReducer.initialState,
  auth: authReducer.initialState

}

export const reducer = combineReducers({
    apollo: client.reducer(),
    auth: authReducer.reducer,
    contact: contactReducer.reducer
})