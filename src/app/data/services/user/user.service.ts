import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageAPIResponse } from 'src/app/core/models/message.model';
import { IUser, IUserListResponse } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) {}

  getUserList(): Observable<IUserListResponse> {
    console.log('Solicitando Lista de Usuarios al Backend');
    return this._http.get<IUserListResponse>('users');
  }

  newUser(user: IUser): Observable<MessageAPIResponse>{
    console.log('Solicitando crear usuario al Backend');
    return this._http.post<MessageAPIResponse>('user/new', user);
  }

}
