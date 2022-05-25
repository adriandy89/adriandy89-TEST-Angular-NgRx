import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { IUser } from 'src/app/core/models/user.model';
import { HomeFacade } from 'src/app/facades/home.facade';
import { UserFacade } from 'src/app/facades/user.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userData$: Observable<IUser | null>;
  products$: Observable<Product[]>

  constructor(private _userFacade: UserFacade, private _homeFacade: HomeFacade) {
    this.userData$= this._userFacade.userData$
    this.products$= this._homeFacade.products$
   }

  ngOnInit(): void {
    this._userFacade.getUserList()
    this._homeFacade.loadProduct()
  }

}
