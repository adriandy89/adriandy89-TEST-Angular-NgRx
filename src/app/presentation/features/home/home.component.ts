import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/core/models/user.model';
import { UserFacade } from 'src/app/facades/user.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userData$: Observable<IUser | null>;

  constructor(private _userFacade: UserFacade) {
    this.userData$= this._userFacade.userData$
   }

  ngOnInit(): void {
    this._userFacade.getUserList()
  }

}
