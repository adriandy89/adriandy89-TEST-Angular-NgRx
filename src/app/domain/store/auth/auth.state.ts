import { ILogin, IUser } from "src/app/core/models/auth.model";

export interface AuthState {
    loginData: ILogin | null;
    userData: IUser | null;
    isLoading: boolean;
    isError: string | null;
  }
  