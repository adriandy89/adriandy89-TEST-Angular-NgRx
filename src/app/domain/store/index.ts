import { Cart } from 'src/app/core/models/cart.model';
import { AuthEffects } from './auth/auth.effects';
import { authReducer } from './auth/auth.reducer';
import { AuthState } from './auth/auth.state';
import { ProductEffect } from './home/home.effects';
import { cartReducer, productReducer } from './home/home.reducer';
import { ProductState } from './home/home.state';
import { UserEffects } from './user/user.effects';
import { userReducer } from './user/user.reducer';
import { UserState } from './user/user.state';

export interface RootState {
  auth: AuthState;
  user: UserState,
  products: ProductState;
  cart: Cart;
}

export const appReducer = {
  auth: authReducer,
  user: userReducer,
  products: productReducer,
  cart: cartReducer
};

export const appEffects = [AuthEffects, UserEffects, ProductEffect];
