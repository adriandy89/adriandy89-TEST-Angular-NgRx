import { AuthEffects } from './auth/auth.effects';
import { authReducer } from './auth/auth.reducer';
import { AuthState } from './auth/auth.state';
export interface RootState {
  auth: AuthState;
}

export const appReducer = {
  auth: authReducer,
};

export const appEffects = [AuthEffects];
