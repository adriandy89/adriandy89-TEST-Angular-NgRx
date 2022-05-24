import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/core/models/product.model';
import { RootState } from 'src/app/domain/store';
import { addToCart, removeFromCart } from 'src/app/domain/store/home/home.actions';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent implements OnInit {

  @Input('product') item: Product | null = null;

  constructor(private _store: Store<RootState>) { }

  ngOnInit(): void {
  }

  increment()
  {
    this._store.dispatch(addToCart({ payload: <Product>this.item }))
  }
  decrement()
  {
    this._store.dispatch(removeFromCart({ payload: <Product>this.item }))
  }
}