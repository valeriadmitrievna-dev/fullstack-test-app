export type ApiError = {
  error: string;
};

export type SignInBody = {
  username: string;
  password: string;
};

export type SignUpBody = {
  name: string;
  username: string;
  password: string;
};

export type CreateTaskBody = {
  title: string;
  description: string | null;
  deadline: Date | null;
};
