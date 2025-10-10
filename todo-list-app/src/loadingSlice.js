import { createSlice } from "@reduxjs/toolkit";

export const loadingSliceDef = {
  name: "loading",
  initialState: {
    value: {
      completed: true,
      successful: false,
    },
  },
  reducers: {
    loadingStarted: (state, action) => {
      console.log("Loading started");
      state.value.completed = false;
    },
    loadingCompleted: (state, action) => {
      state.value.completed = true;
      state.value.successful = true;
    },
    loadingFailed: (state, action) => {
      state.value.completed = true;
      state.value.successful = false;
    },
  },
};
export const loadingsSlice = createSlice(loadingSliceDef);
export const { loadingStarted, loadingCompleted, loadingFailed } =
  loadingsSlice.actions;
