import { createReducer, on } from '@ngrx/store';
import { UserState } from './user.state';
import * as userActions from './user.actions';

export const initialUserState: UserState = {
  userData: null,
  users: null,
  selectedID: null,
  isLoading: false,
  isError: null,
  isMessage: null
};

export const userReducer = createReducer(
    initialUserState,
    on(userActions.userInitialStateAction, (state) => {
      return {
        ...state,
        userData: null,
        users: null,
        selectedID: null,
        isLoading: false,
        isError: null,
        isMessage: null
      };
    }),
  on(userActions.userLoginSuccessAction, (state, { data }) => {
    return {
      ...state,
      userData: data,
    };
  }),
  on(userActions.userCreateNewAction, (state, { data }) => {
    return {
      ...state,
      userData: data,
      isLoading: true,
      isError: null
    };
  }),  
  on(userActions.userUpdateAction, (state, { data }) => {
    return {
      ...state,
      userData: data,
      isLoading: true,
      isError: null
    };
  }),
  on(userActions.userListAction, (state) => {
    return {
      ...state,
      users: null,
      isLoading: true,
      isError: null
    };
  }),
  on(userActions.userListSuccessAction, (state, { data }) => {
    return {
      ...state,
      isLoading: false,
      users: data
    };
  }),
  on(userActions.userDeleteAction, (state, { id }) => {
    return {
      ...state,
      selectedID: id,
      isLoading: true,
      isError: null
    };
  }),
  on(userActions.userOperationSuccessAction, (state, { message }) => {
    return {
      ...state,
      isLoading: false,
      isError: null,
      isMessage: message
    };
  }),
  on(userActions.userErrorAction, (state, { message }) => {
    return {
      ...state,
      isError: message,
      isLoading: false,
      isMessage: null,
    };
  })
);