import { createReducer, on } from "@ngrx/store";
import { Cart } from "src/app/core/models/cart.model";
import { Product } from "src/app/core/models/product.model";
import { addToCart, clearCart, loadProduct, loadProductFailure, loadProductSuccess, removeFromCart } from "./home.actions";
import { ProductState } from "./home.state";

export const initialProductState: ProductState = {
    data: [],
    loaded: false,
    loading: false,
  };
  
  export const initialCartState: Cart = {
    totalOrders: 0,
    records: [],
    items: [],
  };

  export const deepCopy = (inObject: any) => {
    let outObject: any, value, key;
  
    if (typeof inObject !== "object" || inObject === null) {
      return inObject
    }
  
    outObject = Array.isArray(inObject) ? [] : {}
  
    for (key in inObject) {
      value = inObject[key]
  
      outObject[key] = deepCopy(value)
    }
  
    return outObject
  }
  
  export const productReducer = createReducer(
    initialProductState,
    on(loadProduct, (state) => ({
      ...state,
      loading: true,
    })),
    on(loadProductSuccess, (state, action) => ({
      data: [...state.data, ...action.payload],
      loading: false,
      loaded: true,
    })),
    on(loadProductFailure, (state) => ({
      ...state,
      loading: false,
      loaded: false,
    }))
  );
  
  export const cartReducer = createReducer(
    initialCartState,
    on(addToCart, (state, action) => {
      const filteredIndex = state.items.findIndex(item => item.id === action.payload.id);
      const clonedState = <Product[]>deepCopy(state.items);
      const clonedPayload = <Product>deepCopy(action.payload);
  
      if (filteredIndex > -1) {
        const clonedStateItem = clonedState[filteredIndex];
        const clonedStateItemOrder = clonedStateItem.orders;
  
        if (clonedStateItemOrder.count < clonedStateItem.stock) {
          clonedStateItemOrder.count = clonedStateItemOrder.count + 1;
          clonedStateItemOrder.price += clonedStateItemOrder.price + clonedStateItem.price;
  
          return {
            records: [...clonedState],
            items: [...clonedState],
            totalOrders: state.totalOrders + 1,
          }
        } else {
          clonedStateItemOrder.count = clonedStateItem.stock;
  
          return {
            records: [...clonedState],
            items: [...clonedState],
            totalOrders: state.totalOrders,
          }
        }
      }
  
      clonedPayload.orders.count = 1;
      clonedPayload.orders.price = clonedPayload.price;
  
      return {
        records: [...state.items, clonedPayload],
        items: [...state.items, clonedPayload],
        totalOrders: state.totalOrders + 1,
      }
    }),
    on(removeFromCart, (state, action) => {
      const filteredIndex = state.records.findIndex(item => item.id === action.payload.id);
      const clonedState = <Product[]>deepCopy(state.records);
  
      if (filteredIndex > -1) {
        const clonedStateItem = clonedState[filteredIndex];
        const clonedStateItemOrder = clonedStateItem.orders;
        clonedStateItemOrder.count = clonedStateItemOrder.count - 1;
        clonedStateItemOrder.price -= clonedStateItem.price;
  
        if (clonedStateItemOrder.count >= 1) {
          return {
            records: [...clonedState],
            items: [...clonedState.filter((item) => item?.orders?.count > 0)],
            totalOrders: state.totalOrders - 1,
          };
        }
  
        return {
          records: [...clonedState],
          items: [...clonedState.filter((item) => item?.orders?.count > 0)],
          totalOrders: (state.totalOrders > 0) ? (state.totalOrders - 1) : 0,
        }
      }
  
      return {
        records: [...clonedState],
        items: [...clonedState.filter((item) => item?.orders?.count > 0)],
        totalOrders: state.totalOrders,
      }
    }),
    on(clearCart, (state) => ({
      ...state,
      records: [],
      items: [],
      totalOrders: 0,
    })),
  );