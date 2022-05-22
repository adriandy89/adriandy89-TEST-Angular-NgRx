import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as userSelectors from '../domain/store/user/user.selector';
import { RootState } from '../domain/store';
import { IUser } from '../core/models/user.model';
import { userListAction } from '../domain/store/user/user.actions';

@Injectable({ providedIn: 'root' })
export class UserFacade {
    
  userData$: Observable<IUser | null>;
  users$: Observable<IUser[] | null>;
  selectedID$: Observable<string | null>;
  isLoading$: Observable<boolean>;
  isError$: Observable<string | null>;

  constructor(
    private readonly _store: Store<RootState>
  ) {
    this.userData$ = this._store.select(userSelectors.selectDataUser);
    this.users$ = this._store.select(userSelectors.selectListUser);
    this.selectedID$ = this._store.select(userSelectors.selectIDUser);
    this.isLoading$ = this._store.select(userSelectors.selectIsLoadingUser);
    this.isError$ = this._store.select(userSelectors.selectIsErrorUser);
  }

  getUserList() {
    this._store.dispatch(userListAction());
  }
}