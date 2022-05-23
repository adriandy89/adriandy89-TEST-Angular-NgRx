import { createAction, props } from "@ngrx/store";
import { IUser } from "src/app/core/models/user.model";

export const userInitialStateAction = createAction(
    '[User] userInitialStateAction'
);

export const userLoginSuccessAction = createAction(
    '[User] userLoginSuccessAction',
    props<{ data: IUser}>()
);

export const userCreateNewAction = createAction(
    '[User] userCreateNewAction',
    props<{ data: IUser}>()
);

export const userUpdateAction = createAction(
    '[User] userUpdateAction',
    props<{ data: IUser}>()
);

export const userDeleteAction = createAction(
    '[User] userDeleteAction',
    props<{ id: string}>()
);

export const userListAction = createAction(
    '[User] userListAction'
);

export const userListSuccessAction = createAction(
    '[User] userListSuccessAction',
    props<{ data: IUser[]}>()
);

export const userOperationSuccessAction = createAction(
    '[User] userOperationSuccessAction',
    props<{ message: string}>()
);

export const userErrorAction = createAction(
    '[User] userErrorAction',
    props<{ message: string}>()
);
