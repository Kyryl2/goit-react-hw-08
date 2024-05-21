import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.contacts.items;
export const getIsLoading = (state) => state.contacts.loading;

export const getError = (state) => state.contacts.error;
const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (items, name) =>
    items.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))
);
export default selectFilteredContacts;
