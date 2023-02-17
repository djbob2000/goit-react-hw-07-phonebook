import { contactsInitialState } from './contacts.initialState';
import { createSlice } from '@reduxjs/toolkit';
import {
  addContactToStore,
  deleteContactFromStore,
  getContactsFromStore,
} from './contacts.thunk';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder => {
    builder
      .addCase(getContactsFromStore.pending, state => {
        state.isLoading = true;
      })
      .addCase(getContactsFromStore.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(getContactsFromStore.rejected, (state, { payload }) => {
        state.isLoading = false;
      })

      .addCase(addContactToStore.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
        state.error = null;
      })
      .addCase(addContactToStore.rejected, (state, { payload }) => {
        state.isLoading = false;
      })

      .addCase(deleteContactFromStore.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(({ id }) => id !== payload);
        state.error = null;
      })
      .addCase(deleteContactFromStore.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
