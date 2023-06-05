import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { persistedContactsReducer } from './contacts/slice';

import { filterSlice } from './filter/slice';

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterSlice.reducer,
  },
});

export const persistor = persistStore(store);
