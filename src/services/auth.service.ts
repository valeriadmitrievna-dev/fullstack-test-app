import API from "./index";
import { ApiError, SignInBody, SignUpBody } from "../types/services";
import { AxiosError } from "axios";

export const signInService = async (body: SignInBody) => {
  try {
    const response = await API.post("/users/signin", body);
    return response;
  } catch (error) {
    throw new Error(
      (error as AxiosError<ApiError>).response?.data.error ||
        (error as Error).message
    );
  }
};

export const signUpService = async (body: SignUpBody) => {
  try {
    const response = await API.post("/users/signup", body);
    return response;
  } catch (error) {
    throw new Error(
      (error as AxiosError<ApiError>).response?.data.error ||
        (error as Error).message
    );
  }
};
