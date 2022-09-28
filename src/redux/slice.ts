import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/user";
import { getUserThunk, signInThunk, signUpThunk } from "./thunks";

export type RootState = {
  auth: boolean;
  loading: boolean;
  user?: User;
  error?: string;
};

export const initialState: RootState = {
  auth: !!localStorage.getItem("token"),
  loading: false,
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    removeError(state) {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInThunk.fulfilled, (state, { payload }) => {
      localStorage.setItem("token", payload);
      state.auth = true;
    });
    builder.addCase(signUpThunk.fulfilled, (state, { payload }) => {
      localStorage.setItem("token", payload);
      state.auth = true;
    });
    builder.addCase(getUserThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload;
    });
    builder.addCase(getUserThunk.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload?.error;
      state.auth = false;
      localStorage.removeItem("token");
    });
  },
});

export const { removeError } = rootSlice.actions;

export default rootSlice.reducer;
