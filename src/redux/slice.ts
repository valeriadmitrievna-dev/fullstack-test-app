import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../types/task";
import { User } from "../types/user";
import {
  createTaskThunk,
  getAllTasksThunk,
  getUserThunk,
  signInThunk,
  signUpThunk,
} from "./thunks";

export type RootState = {
  auth: boolean;
  loading: boolean;
  user?: User;
  error?: string;
  tasks: Task[];
};

export const initialState: RootState = {
  auth: !!localStorage.getItem("token"),
  loading: false,
  tasks: [],
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    createError(state, { payload }: { payload: string }) {
      state.error = payload;
    },
    removeError(state) {
      state.error = undefined;
    },
    logout(state) {
      localStorage.removeItem("token");
      state.user = undefined;
      state.auth = false;
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
    builder.addCase(getAllTasksThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllTasksThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.tasks = payload;
    });
    builder.addCase(getAllTasksThunk.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload?.error;
      state.auth = false;
      localStorage.removeItem("token");
    });
    builder.addCase(createTaskThunk.fulfilled, (state, { payload }) => {
      state.tasks = [payload, ...state.tasks];
    });
    builder.addCase(createTaskThunk.rejected, (state, { payload }) => {
      state.error = undefined;
      state.error = payload?.error;
    });
  },
});

export const { createError, removeError, logout } = rootSlice.actions;

export default rootSlice.reducer;
