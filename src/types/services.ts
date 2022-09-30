import { Task } from "./task";
import { User } from "./user";

export type ApiError = { error: string };

export type SignInBody = Pick<User, "username"> & { password: string };
export type SignUpBody = Pick<User, "username" | "name"> & { password: string };

export type CreateTaskBody = Pick<Task, "title" | "description" | "deadline">;
export type EditTaskBody = {
  id: number;
  body: {
    title?: string;
    description?: string | null;
    deadline?: Date | null;
    done?: boolean;
  };
};

export type DeleteTaskId = number;
