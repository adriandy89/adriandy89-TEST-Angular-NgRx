import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { QuantityComponent } from './quantity/quantity.component';
import { SubtotalComponent } from './subtotal/subtotal.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductItemComponent,
    QuantityComponent,
    SubtotalComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
