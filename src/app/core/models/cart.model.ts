import { Product } from "./product.model";

export interface Cart {
    totalOrders:number;
    records:Product[];
    items:Product[];
  }