import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //baseURL = environment.api_fake_products;
  constructor(private http:HttpClient) { }

  getProducts(): Observable<Record<string,any>> {
    return of({
      "product": [
        {
          "id": "619ebb29d82667fc47c29fb91",
          "name": "Limón",
          "image": "https://images.unsplash.com/photo-1587324438673-56c78a866b15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVtb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          "price": 75,
          "stock": 14,
          "orders": {}
        },
        {
          "id": "619ebb290c90d7560de6ecf41",
          "name": "Platano",
          "image": "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFuYW5hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          "price": 35,
          "stock": 12,
          "orders": {}
        },
        {
          "id": "619ebb2947daf45206f19ea81",
          "name": "Coco",
          "image": "https://images.unsplash.com/photo-1560769680-ba2f3767c785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29jb251dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          "price": 50,
          "stock": 6,
          "orders": {}
        },
        {
          "id": "619ebb29d82667fc47c29fb92",
          "name": "Limón 2",
          "image": "https://images.unsplash.com/photo-1587324438673-56c78a866b15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVtb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          "price": 75,
          "stock": 14,
          "orders": {}
        },
        {
          "id": "619ebb290c90d7560de6ecf42",
          "name": "Platano 2",
          "image": "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFuYW5hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          "price": 35,
          "stock": 12,
          "orders": {}
        },
        {
          "id": "619ebb2947daf45206f19ea82",
          "name": "Coco 2",
          "image": "https://images.unsplash.com/photo-1560769680-ba2f3767c785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29jb251dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          "price": 50,
          "stock": 6,
          "orders": {}
        }
      ]
    }).pipe(delay(1000));
  }
}
