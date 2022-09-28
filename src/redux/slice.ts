import { createSlice } from "@reduxjs/toolkit";
import { signInThunk, signUpThunk } from "./thunks";

export type RootState = {
  auth: boolean;
};

export const initialState: RootState = {
  auth: !!localStorage.getItem("token"),
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signInThunk.fulfilled, (state, { payload }) => {
      localStorage.setItem("token", payload);
      state.auth = true;
    });
    builder.addCase(signUpThunk.fulfilled, (state, { payload }) => {
      localStorage.setItem("token", payload);
      state.auth = true;
    });
  },
});

export const {} = rootSlice.actions;

export default rootSlice.reducer;
