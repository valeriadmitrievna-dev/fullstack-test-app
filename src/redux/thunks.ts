import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInService, signUpService } from "../services/auth.service";
import { ApiError, SignInBody, SignUpBody } from "../types/services";

export const signInThunk = createAsyncThunk<
  string,
  SignInBody,
  { rejectValue: ApiError }
>("user/signin", async (body: SignInBody, thunkApi) => {
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
>("user/signup", async (body: SignUpBody, thunkApi) => {
  try {
    const { data } = await signUpService(body);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue({ error: (error as Error).message });
  }
});
