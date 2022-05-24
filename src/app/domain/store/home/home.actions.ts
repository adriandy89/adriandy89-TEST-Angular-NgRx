import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/core/models/product.model";

export const loadProduct = createAction('[Product] Load Product');

export const loadProductSuccess = createAction(
  '[Product] Load Product Success',
  props<{ payload: Product[] }>()
);
export const loadProductFailure = createAction(
  '[Product] Load Product Failure',
  props<{ error: any }>()
);
export const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ payload: Product }>()
);
export const removeFromCart = createAction(
  '[Cart] Remove From Cart',
  props<{ payload: Product }>()
);

export const clearCart = createAction('[Cart] Clear Cart');