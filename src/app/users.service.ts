import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private httpClient: HttpClient) { }


  getData(): Observable<any> {

    return this.httpClient.get<any>('http://localhost:3000/api/users');
  }


}





