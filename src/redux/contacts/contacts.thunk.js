import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63eccc4932a0811723a24485.mockapi.io';

export const getContactsFromStore = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  }
);

export const addContactToStore = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }) => {
    const { data } = await axios.post('/contacts', { name, phone });
    return data;
  }
);

export const deleteContactFromStore = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data.id;
  }
);
