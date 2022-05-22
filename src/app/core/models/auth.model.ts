import { IUser } from "./user.model";

export interface ILogin {
  username: string;
  password: string;
}
export interface ILoginResponse {
  token: string;
  user: IUser;
}
