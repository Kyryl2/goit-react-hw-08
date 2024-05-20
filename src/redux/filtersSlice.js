import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    name: "",
  },
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  selectors: {
    selectNameFilter: (state) => state.filters,
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filters.name = payload;
    },
  },
});

export const { selectNameFilter } = filtersSlice.selectors;
export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
