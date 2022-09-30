import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInService, signUpService } from "../services/auth.service";
import {
  createTaskService,
  getAllTasksService,
} from "../services/task.service";
import { getUserService } from "../services/user.service";
import {
  ApiError,
  CreateTaskBody,
  SignInBody,
  SignUpBody,
} from "../types/services";
import { Task } from "../types/task";
import { User } from "../types/user";

export const signInThunk = createAsyncThunk<
  string,
  SignInBody,
  { rejectValue: ApiError }
>("user/signin", async (body, thunkApi) => {
  try {
    const { data } = await signInService(body);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue({ error: (error as Error).message });
  }
});

export const signUpThunk = createAsyncThunk<
  string,
  SignUpBody,
  { rejectValue: ApiError }
>("user/signup", async (body, thunkApi) => {
  try {
    const { data } = await signUpService(body);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue({ error: (error as Error).message });
  }
});

export const getUserThunk = createAsyncThunk<
  User,
  void,
  { rejectValue: ApiError }
>("user/data", async (__, thunkApi) => {
  try {
    const { data } = await getUserService();
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue({ error: (error as Error).message });
  }
});

export const getAllTasksThunk = createAsyncThunk<
  Task[],
  void,
  { rejectValue: ApiError }
>("tasks/get", async (__, thunkApi) => {
  try {
    const { data } = await getAllTasksService();
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue({ error: (error as Error).message });
  }
});

export const createTaskThunk = createAsyncThunk<
  Task,
  CreateTaskBody,
  { rejectValue: ApiError }
>("tasks/create", async (body, thunkApi) => {
  try {
    const { data } = await createTaskService(body);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue({ error: (error as Error).message });
  }
});
