import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private _router: Router, private _notifierService: NotifierService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([401].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized response returned from api
                this._notifierService.notify('warning', 'ACCESO DENEGADO, Su Sesión puede haber Expirado!');
                localStorage.clear()
                console.log('salir')
                this._router.navigateByUrl('auth/login');
            }
            if ([403].indexOf(err.status) !== -1) {
              // auto logout if 401 Unauthorized response returned from api
              this._notifierService.notify('warning', err.error);
              localStorage.clear()
              console.log('salir')
              this._router.navigateByUrl('auth/login');
          }
            return next.handle(request);
        }))
    }
}
