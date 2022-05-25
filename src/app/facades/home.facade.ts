import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../core/models/product.model';
import { RootState } from '../domain/store';
import { loadProduct } from '../domain/store/home/home.actions';
import * as homeSelectors from '../domain/store/home/home.selector';
@Injectable({ providedIn: 'root' })
export class HomeFacade {

  products$: Observable<Product[]>

  constructor(private readonly _store: Store<RootState>) {
    this.products$ = this._store.select(homeSelectors.selectProducts);
  }

  loadProduct(){
    this._store.dispatch(loadProduct());
  }
}
