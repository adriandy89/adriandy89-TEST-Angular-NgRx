import { ILogin } from "src/app/core/models/auth.model";
import { IUser } from "src/app/core/models/user.model";

export interface AuthState {
    loginData: ILogin | null;
    isLoading: boolean;
    isError: string | null;
  }
  