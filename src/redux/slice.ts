import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
});

export const {} = rootSlice.actions;

export default rootSlice.reducer;
