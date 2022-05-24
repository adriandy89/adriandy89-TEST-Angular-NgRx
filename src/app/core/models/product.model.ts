import { Orders } from "./order.model";

export interface Product {
    id:string;
    name:string;
    price: number;
    stock: number;
    image: string;
    orders: Orders;
  }