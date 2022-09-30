import API from "./index";
import { ApiError, CreateTaskBody, EditTaskBody } from "../types/services";
import { AxiosError } from "axios";

export const getAllTasksService = async () => {
  try {
    const response = await API.get("/tasks");
    return response;
  } catch (error) {
    throw new Error(
      (error as AxiosError<ApiError>).response?.data.error ||
        (error as Error).message
    );
  }
};

export const createTaskService = async (body: CreateTaskBody) => {
  try {
    const response = await API.post("/tasks", body);
    return response;
  } catch (error) {
    throw new Error(
      (error as AxiosError<ApiError>).response?.data.error ||
        (error as Error).message
    );
  }
};

export const editTaskService = async (data: EditTaskBody) => {
  try {
    const response = await API.put(`/tasks/${data.id}`, data.body);
    return response;
  } catch (error) {
    throw new Error(
      (error as AxiosError<ApiError>).response?.data.error ||
        (error as Error).message
    );
  }
};
