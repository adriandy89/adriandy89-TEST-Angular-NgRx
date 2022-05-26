import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as authActions from './auth.actions';
import * as userActions from '../user/user.actions';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from 'src/app/data/services/auth/auth.service';
import { ErrorAPIResponse } from 'src/app/core/models/error.model';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private _router: Router,
    private _authService: AuthService
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.loginAction),
      exhaustMap((action) =>
        this._authService.login(action.data).pipe(
          map((response) => {
            console.log(response)
            localStorage.setItem('sales.token', response.token);
           // return authActions.loginSuccessAction({data: response.user});
            return userActions.userLoginSuccessAction({data: response.user}); // Por que llamar a una accion de la entidad usuario que lo que hace es llamar a la accion loginSuccessAction
          }),
          catchError((error: ErrorAPIResponse) =>
            of(
              authActions.loginErrorAction({
                message: error.error,
              })
            )
          )
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.loginSuccessAction),
        tap((_) => {
          this._router.navigateByUrl('home');
        })
      ),
    { dispatch: false }
  );
}