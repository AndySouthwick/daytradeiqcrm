import {actionTypes} from './actions'

export const initialState = {
  allContacts: [],
  contact: null
}

export function reducer (state = initialState, action){
  switch (action.type){
    case actionTypes.GetAllContacts:
      console.log('hit reducer')
      return{
        ...state,
        allContactInfo: action.payload
      }
    case actionTypes.GetContact:
      return{
        ...state,
        contactInfo: action.payload
      }
    default:
      return state
  }

}