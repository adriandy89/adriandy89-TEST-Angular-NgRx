import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin, ILoginResponse } from 'src/app/core/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  login(data: ILogin): Observable<ILoginResponse> {
    console.log(data);
    console.log('logueando a la API');
    return this._http.post<ILoginResponse>('auth/login', data);
  }
}