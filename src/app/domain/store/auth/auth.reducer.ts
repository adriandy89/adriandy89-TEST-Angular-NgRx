import { createReducer, on } from '@ngrx/store';
import * as authActions from './auth.actions';
import { AuthState } from './auth.state';

export const initialAuthState: AuthState = {
  loginData: null,
  isLoading: false,
  isError: null,
};

export const authReducer = createReducer(
  initialAuthState,
  on(authActions.loginAction, (state, { data }) => {
    return {
      ...state,
      loginData: data,
      isLoading: true,
      isError: null,
    };
  }),
  on(authActions.loginSuccessAction, (state) => {
    return {
      ...state,
      loginData: null,
      isLoading: false,
      isError: null,
    };
  }),
  on(authActions.loginErrorAction, (state, { message }) => {
    return {
      ...state,
      isLoading: false,
      isError: message,
    };
  })
);
