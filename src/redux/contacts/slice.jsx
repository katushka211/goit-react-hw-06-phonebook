import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import initialContactsData from '../../components/contacts.json';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    initialContacts: initialContactsData,
  },
  reducers: {
    addContact(state, action) {
      state.initialContacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.initialContacts = state.initialContacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact, deleteContact } = contactSlice.actions;

// const addContact = createAction('contacts/addContact');
// const deleteContact = createAction('contacts/deleteActions');

// export const contactsReducer = createReducer(initialContacts, {
//   [addContact]: (state, action) => state.push(action.payload),
//   [deleteContact]: (state, action) =>
//     state.filter(contact => contact.id !== action.payload),
// });
