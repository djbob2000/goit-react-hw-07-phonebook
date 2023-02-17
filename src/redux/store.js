import { contactsInitialState } from './contacts/contacts.initialState';
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contacts.slice';
import { filterReducer } from './filter/filter.slice';

export const store = configureStore({
  preloadedState: contactsInitialState,
  devTools: true,

  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
