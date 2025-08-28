import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  firstname: string;
  lastname: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceUsersService {

  private apiUrl = 'https://fakerapi.it/api/v1/users?_quantity=50&_locale=ru_RU';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<{ data: User[] }> {
    return this.http.get<{ data: User[] }>(this.apiUrl);
  }
}
