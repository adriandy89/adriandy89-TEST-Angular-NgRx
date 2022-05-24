import { createSelector } from "@ngrx/store";
import { Cart } from "src/app/core/models/cart.model";
import { RootState } from "..";


export const selectProducts = (state: RootState) => state.products.data;
export const selectCart = (state: RootState) => state.cart;
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartTotal = (state: RootState) => state.cart.items.reduce((prev, curr) => (prev += curr.orders.price), 0);

export const selectProduct = (props: any) => (
  createSelector(
    selectProducts,
    (state) => state.find((product) => product.id === props.id)
  )
);

export const selectCartProduct = (props: any) => (
  createSelector(
    selectCart,
    (state: Cart) => state.records.find((product) => product.id === props.id)
  )
);
