import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { Product } from "src/app/core/models/product.model";
import { ProductsService } from "src/app/data/services/products/products.service";
import * as homeActions from './home.actions';
@Injectable()
export class ProductEffect {
  constructor(
    private actions$: Actions,
    private _productService: ProductsService
  ) {
  }

  products$ = createEffect(() =>
  this.actions$.pipe(
    ofType(homeActions.loadProduct),
    mergeMap(() => this._productService.getProducts().pipe(
      map((data) => {
        const products = <Product[]>data['product'].map((item: Product) =>
        ({ ...item, orders: { count: 0, price: 0 } }));
        return homeActions.loadProductSuccess({ payload: products });
      }),
      catchError((error) => of(homeActions.loadProductFailure({ error })))
    )),
  )
);
}