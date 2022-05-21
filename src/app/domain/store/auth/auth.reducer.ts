import { createReducer, on, Action } from '@ngrx/store';
import * as authActions from './auth.actions';
import { AuthState } from './auth.state';

export const initialAuthState: AuthState = {
  loginData: null,
  userData: null,  
  isLoading: false,
  isError: null,
};

const authReducerInternal = createReducer(
  initialAuthState,
  on(authActions.loginAction, (state, { data }) => {
    return {
      ...state,
      loginData: data,
      userData: null,
      isLoading: true,
      isError: null,
    };
  }),
  on(authActions.loginSuccessAction, (state, { data }) => {
    return {
      ...state,
      loginData: null,
      isLoading: false,
      userData: data,
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
export function authReducer(state: AuthState | undefined, action: Action) {
  return authReducerInternal(state, action);
}
