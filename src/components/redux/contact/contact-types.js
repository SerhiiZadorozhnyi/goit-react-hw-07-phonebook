// export const ADD = 'contact/addContact';
// export const DELETE = 'contact/deleteContact';
// export const CHANGE_FILTER = 'contact/changeFilter';

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { existsTypeAnnotation } from "@babel/types";

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContact = createAsyncThunk(
    'contact/fetchContact',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/contact`);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const addContact = createAsyncThunk(
    'contact/addContact',
    async (data, { rejectWithValue }) => {
        const contact = { name: data, number: data };
        try {
            const { data } = await axios.post(`/contact`, contact);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const deleteContact = createAsyncThunk(
    'contac/deleteContact',
    async (contactId, { rejectWithValue }) => {
        try {
            await axios.delete(`/contact/${contactId}`);
            return contactId;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);