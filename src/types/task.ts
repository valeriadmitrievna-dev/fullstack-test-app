export type Task = {
  id: number;
  title: number;
  description: string | null;
  done: boolean;
  deadline: Date | null;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
};
