import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './reducer';
import { createAction } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

const addContact = createAction('contacts/addContact');
console.log(addContact(100));
