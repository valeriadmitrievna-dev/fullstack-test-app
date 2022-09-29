import API from "./index";
import { ApiError } from "../types/services";
import { AxiosError } from "axios";

export const getUserService = async () => {
  try {
    const response = await API.get("/users/data");
    return response;
  } catch (error) {
    throw new Error(
      (error as AxiosError<ApiError>).response?.data.error ||
        (error as Error).message
    );
  }
};
