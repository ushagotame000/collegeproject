export interface IUser {
  id: string;
  username: string;
  email: string;
}

export interface authState {
  user: IUser | null;
}
