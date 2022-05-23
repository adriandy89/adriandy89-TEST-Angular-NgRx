import { IUser } from "src/app/core/models/user.model";

export interface UserState {
    userData: IUser | null;
    users: IUser[] | null;
    selectedID: string | null;
    isLoading: boolean;
    isError: string | null;
    isMessage: string | null;
  }
  