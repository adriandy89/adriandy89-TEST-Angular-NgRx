import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cart } from 'src/app/core/models/cart.model';
import { Product } from 'src/app/core/models/product.model';
import { RootState } from 'src/app/domain/store';
import * as homeSelectors from 'src/app/domain/store/home/home.selector';

@Component({
  selector: 'app-subtotal',
  templateUrl: './subtotal.component.html',
  styleUrls: ['./subtotal.component.scss']
})
export class SubtotalComponent implements OnInit {

  public cart : Cart | null= null;
  public subtotal: number | null = null;
  public cartItems: Product[] | null = null;

  constructor(private _store: Store<RootState>) { }

  ngOnInit(): void {
    this.getState();
  }
  getState() {
    this._store.select(homeSelectors.selectCart).subscribe({
      next: res => {
        this.cart = res;
        this.cartItems = this.cart.items;
        this.subtotal = this.cartItems.reduce((acc, curr) => (acc += curr.orders.price), 0);
      }
    })
  }
}