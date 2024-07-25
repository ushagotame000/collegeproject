export interface IUser {
  id: string;
  username: string;
  email: string;
}

export interface authState {
  user: IUser | null;
  token: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
