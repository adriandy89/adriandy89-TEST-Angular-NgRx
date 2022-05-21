import { createAction, props } from "@ngrx/store";
import { ILogin, IUser } from "src/app/core/models/auth.model";

export const loginAction = createAction(
    '[Auth] LoginAction',
    props<{ data: ILogin}>()
);

export const loginSuccessAction = createAction(
    '[Auth] LoginSuccessAction',
    props<{ data: IUser}>()
);

export const loginErrorAction = createAction(
    '[Auth] LoginErrorAction',
    props<{ message: string}>()
);