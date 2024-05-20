import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
import { selectNameFilter } from "../filters/slice";

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
  selectors: {
    selectContacts: (state) => state.contacts.items,
    getIsLoading: (state) => state.contacts.loading,

    getError: (state) => state.contacts.error,
  },
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

export const { selectContacts, getError, getIsLoading } =
  contactsSlice.selectors;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (items, { name }) =>
    items.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))
);

export const contactsReducer = contactsSlice.reducer;
