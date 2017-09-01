export const actionTypes = {
  GetAllContacts: '[CRM] Get all contacts',
  GetContact: '[CRM] Get contact',
}

export function getAllContacts (contactData){
  console.log('hit action')
  return {
    type: actionTypes.GetAllContacts,
    payload: contactData
  }
}
export function getContact(getContactsData){
  return {
    type: actionTypes.GetContact,
    payload: getContactsData
  }
}