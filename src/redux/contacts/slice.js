import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
import { logout } from "../auth/operations";

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.contacts.loading = true;
      })
      .addCase(addContact.pending, (state) => {
        state.contacts.loading = true;
      })
      .addCase(deleteContact.pending, (state) => {
        state.contacts.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        state.contacts.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        state.contacts.items.push(payload);
      })
      .addCase(logout.fulfilled, (state) => {
        state.contacts.items = [];
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        // state.contacts.items = state.contacts.items.filter(
        //   (item) => item.id !== payload.id
        // );
        const index = state.contacts.items.findIndex(
          (item) => item.id === payload.id
        );
        state.contacts.items.splice(index, 1);
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.contacts.loading = true;
        state.contacts.error = payload;
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.contacts.loading = true;
        state.contacts.error = payload;
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.contacts.loading = true;
        state.contacts.error = payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
