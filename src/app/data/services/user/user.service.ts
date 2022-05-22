import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserListResponse } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) {}

  getUserList(): Observable<IUserListResponse> {
    console.log('Solicitando Lista de Usuarios al Backend');
    return this._http.get<IUserListResponse>('users');
  }
}
