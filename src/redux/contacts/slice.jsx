// import contacts from '../components/contacts.json';
import { createSlice } from '@reduxjs/toolkit';

// const initialContacts = contacts;

// const addContact = createAction('contacts/addContact');
// const deleteContact = createAction('contacts/deleteActions');

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});
export const { addContact, deleteContact } = contactSlice.actions;

// export const contactsReducer = createReducer(initialContacts, {
//   [addContact]: (state, action) => state.push(action.payload),
//   [deleteContact]: (state, action) =>
//     state.filter(contact => contact.id !== action.payload),
// });
