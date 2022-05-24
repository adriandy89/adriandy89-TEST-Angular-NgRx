import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/core/models/product.model';
import { RootState } from 'src/app/domain/store';
import * as homeSelectors from 'src/app/domain/store/home/home.selector';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input('data-product') product: Product | null = null;
  constructor(private _store: Store<RootState>) { }
  ngOnInit(): void {
    this.getCartItemState();
  }
  getCartItemState() {
    this._store.select(homeSelectors.selectCartProduct(this.product)).subscribe({
      next : (res) =>
      {
        if(res && Object.keys(res).length) {
          this.product = res;
        }
      }
    })
  }


}
