import { Product } from "src/app/core/models/product.model";

export interface ProductState {
    data: Product[];
    loading: boolean;
  }
