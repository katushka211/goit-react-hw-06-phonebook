import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contacts/slice';
import { filterSlice } from './filter/slice';

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
});
