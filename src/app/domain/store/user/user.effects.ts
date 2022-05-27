import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mapTo, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ErrorAPIResponse } from 'src/app/core/models/error.model';
import * as authActions from '../auth/auth.actions';
import * as userActions from './user.actions';
import { UserService } from 'src/app/data/services/user/user.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private _userService: UserService,
    private _router: Router,
    private _notifierService: NotifierService
  ) {}


  userDataLoginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(userActions.userLoginSuccessAction),
        mapTo(authActions.loginSuccessAction())

      ),
  );

  userList$ = createEffect(() =>
      this.actions$.pipe(
        ofType(userActions.userListAction),
        exhaustMap((action) =>
        this._userService.getUserList().pipe(
          map((response) => {
            console.log(response)
           // return authActions.loginSuccessAction({data: response.user});
           if (response==null) {
            return userActions.userListSuccessAction({data: []});
           }
            return userActions.userListSuccessAction({data: response.users});
          }),
          catchError((error: ErrorAPIResponse) =>
            of(
              userActions.userErrorAction({
                message: error.error,
              })
            )
          )
        )
      )
    )
  );

  userCreateNew$ = createEffect(() =>
      this.actions$.pipe(
        ofType(userActions.userCreateNewAction),
        exhaustMap((action) =>
        this._userService.newUser(action.data).pipe(
          map((response) => {
            this._notifierService.notify('success', response.message);
            return userActions.userCreateNewSuccesAction();
          }),
          catchError((error: ErrorAPIResponse) =>
            of(
              userActions.userErrorAction({
                message: error.error,
              })
            )
          )
        )
      )
    )
  );

  userCreateNewSucces$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(userActions.userCreateNewSuccesAction),
        tap((_) => {
          this._router.navigateByUrl('auth/login');
        })
      ),
    { dispatch: false }
  );
}
