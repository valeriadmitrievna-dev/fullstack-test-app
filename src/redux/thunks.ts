import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInService, signUpService } from "../services/auth.service";
import { getUserService } from "../services/user.service";
import { ApiError, SignInBody, SignUpBody } from "../types/services";
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
